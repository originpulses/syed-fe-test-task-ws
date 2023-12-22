import { render, fireEvent } from "@testing-library/react";
import Tab from "./Tab";

describe("Tab Component", () => {
  test("should render Tab component with two tabs", () => {
    const mockOnTabChange = jest.fn();
    const { getByText } = render(
      <Tab tabValue={0} onTabChange={mockOnTabChange} />
    );

    const leaderboardTab = getByText("Leaderboard");
    const settingsTab = getByText("Settings");

    expect(leaderboardTab).toBeInTheDocument();
    expect(settingsTab).toBeInTheDocument();
  });

  test("should call onTabChange when a tab is clicked", () => {
    const mockOnTabChange = jest.fn();
    const { getByText } = render(
      <Tab tabValue={0} onTabChange={mockOnTabChange} />
    );

    const settingsTab = getByText("Settings");
    fireEvent.click(settingsTab);
    expect(mockOnTabChange).toHaveBeenCalledWith(1);
  });
});
