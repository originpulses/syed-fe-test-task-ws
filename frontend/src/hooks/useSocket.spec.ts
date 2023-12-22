import { renderHook } from "@testing-library/react";
import { useSocket } from "./useSocket";

describe("useSocket hook", () => {
  it("should not throw errors when rendering the hook", () => {
    const displayCount = 5;
    const setUsers = jest.fn();
    const setHighlightedRows = jest.fn();

    try {
      renderHook(() => useSocket(displayCount, setUsers, setHighlightedRows));
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });
});
