import { render, fireEvent } from "@testing-library/react";
import RankingTable from "./RankingTable";

describe("RankingTable", () => {
  const mockUsers = [
    {
      userId: "1",
      username: "pikachu",
      email: "pikachu@pokemon.com",
      score: 50,
      avatar: "pikachu.jpg",
    },
    {
      userId: "2",
      username: "charizard",
      email: "charizard@pokemon.com",
      score: 200,
      avatar: "charizard.jpg",
    },
  ];

  const mockHighlightedRows: Record<string, boolean> = {
    "1": true,
    "2": false,
  };

  it("should render table with user data", () => {
    const mockOnUserDelete = jest.fn();

    const { getByText, getAllByTestId } = render(
      <RankingTable
        users={mockUsers}
        onUserDelete={mockOnUserDelete}
        highlightedRows={mockHighlightedRows}
      />
    );

    expect(getByText("Username")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Score")).toBeInTheDocument();

    mockUsers.forEach((user) => {
      expect(getByText(user.username)).toBeInTheDocument();
      expect(getByText(user.email)).toBeInTheDocument();
      expect(getByText(user.score.toString())).toBeInTheDocument();
    });

    const deleteButtons = getAllByTestId("delete-button");
    expect(deleteButtons).toHaveLength(mockUsers.length);

    deleteButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(mockOnUserDelete).toHaveBeenCalledWith(mockUsers[index].userId);
    });
  });
});
