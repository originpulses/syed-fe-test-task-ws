import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { IUser } from "../Leaderboard/Leaderboard";

interface ITableRowProps {
  user: IUser;
  onUserDelete: (userId: string) => void;
  isHighlighted: boolean;
}

const TableRowItem: React.FC<ITableRowProps> = ({
  user,
  onUserDelete,
  isHighlighted,
}) => {
  const rowStyle = {
    backgroundColor: isHighlighted ? "#c8e6c9" : "transparent",
    transition: "background-color 1s ease",
  };

  return (
    <TableRow key={user.userId} style={rowStyle}>
      <TableCell>
        <img
          src={user.avatar}
          alt={`${user.username}'s Avatar`}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      </TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.score}</TableCell>
      <TableCell>
        <IconButton
          data-testid={'delete-button'}
          onClick={() => onUserDelete(user.userId)}
        >
          <DeleteForeverRoundedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableRowItem;
