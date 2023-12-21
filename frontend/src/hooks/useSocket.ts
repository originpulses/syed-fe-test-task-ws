import { useEffect, Dispatch, SetStateAction } from "react";
import io from "socket.io-client";
import { IUser } from "../components/Leaderboard/Leaderboard";

/**
 * Custom hook for handling WebSocket connections and updating user data.
 * @param displayCount - Number of users to display in the leaderboard
 * @param setUsers - State setter function to update the users state
 * @param setHighlightedRows - State setter function to update highlighted rows
 */

interface ISocket {
  on(event: string, callback: (data: IUser) => void): void;
  disconnect(): void;
}

export const useSocket = (
  displayCount: number,
  setUsers: Dispatch<SetStateAction<IUser[]>>,
  setHighlightedRows: Dispatch<SetStateAction<Record<string, boolean>>>
) => {
  useEffect(() => {
    const socket: ISocket = io("ws://localhost:3050");

    socket.on("userData", (newUser: any) => {
      setUsers((prevUsers: any[]) => {
        const updatedUsers = [...prevUsers, newUser]
          .sort((a, b) => b.score - a.score)
          .slice(0, displayCount);
        setHighlightedRows((prevState: Record<string, boolean>) => ({
          ...prevState,
          [newUser.userId]: true,
        }));
        setTimeout(() => {
          setHighlightedRows((prevState: Record<string, boolean>) => ({
            ...prevState,
            [newUser.userId]: false,
          }));
        }, 1000);
        return updatedUsers;
      });
    });

    return () => {
      // Cleanup logic: Disconnect the socket
      socket.disconnect();
    };
  }, [displayCount, setUsers, setHighlightedRows]);
};
