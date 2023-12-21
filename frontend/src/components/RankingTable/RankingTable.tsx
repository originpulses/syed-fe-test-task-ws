import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import TableRowItem from "../TableRowItem/TableRowItem";
import { IUser } from "../Leaderboard/Leaderboard";

interface IRankingTableProps {
  users: IUser[];
  onUserDelete: (userId: string) => void;
  highlightedRows: Record<string, boolean>;
}

const RankingTable: React.FC<IRankingTableProps> = ({
  users,
  onUserDelete,
  highlightedRows,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Score</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRowItem
            key={user.userId}
            user={user}
            onUserDelete={onUserDelete}
            isHighlighted={highlightedRows[user.userId]}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default RankingTable;
