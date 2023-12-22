import { render, fireEvent } from "@testing-library/react";
import Leaderboard from "./Leaderboard";

describe("Leaderboard component", () => {
  it("should render without crashing", () => {
    const { getByText } = render(<Leaderboard />);
    const leaderboardTab = getByText("Leaderboard");
    const settingsTab = getByText("Settings");

    expect(leaderboardTab).toBeInTheDocument();
    expect(settingsTab).toBeInTheDocument();
  });

  it("should switch between tabs correctly", () => {
    const { getByText } = render(<Leaderboard />);
    const settingsTab = getByText("Settings");
    fireEvent.click(settingsTab);

    const displayCountText = getByText("Display Count:");
    expect(displayCountText).toBeInTheDocument();

    const leaderboardTab = getByText("Leaderboard");
    fireEvent.click(leaderboardTab);

    const usernameText = getByText("Username");
    expect(usernameText).toBeInTheDocument();
  });
});
