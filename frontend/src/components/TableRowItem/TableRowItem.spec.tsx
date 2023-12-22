import { render, fireEvent } from "@testing-library/react";
import TableRowItem from "./TableRowItem";

describe("TableRowItem Component", () => {
  const mockUser = {
    userId: "1",
    username: "pikachu",
    email: "pikachu@pokemon.com",
    score: 50,
    avatar: "pikachu.jpg",
  };

  const mockOnUserDelete = jest.fn();

  it("should render user details correctly", () => {
    const { getByText, getByAltText } = render(
      <TableRowItem
        user={mockUser}
        onUserDelete={mockOnUserDelete}
        isHighlighted={false}
      />
    );

    expect(getByAltText("pikachu's Avatar")).toBeInTheDocument();
    expect(getByText("pikachu")).toBeInTheDocument();
    expect(getByText("pikachu@pokemon.com")).toBeInTheDocument();
    expect(getByText("50")).toBeInTheDocument();
  });

  it("should apply highlighted row style when isHighlighted is true", () => {
    const { getByRole } = render(
      <TableRowItem
        user={mockUser}
        onUserDelete={mockOnUserDelete}
        isHighlighted={true}
      />
    );

    const tableRow = getByRole("row");
    expect(tableRow).toHaveStyle("background-color: #c8e6c9");
  });

  it("should call onUserDelete function when delete button is clicked", () => {
    const { getByRole } = render(
      <TableRowItem
        user={mockUser}
        onUserDelete={mockOnUserDelete}
        isHighlighted={false}
      />
    );

    const deleteButton = getByRole("button");
    fireEvent.click(deleteButton);
    expect(mockOnUserDelete).toHaveBeenCalledWith("1");
  });
});
