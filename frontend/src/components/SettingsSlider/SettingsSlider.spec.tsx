import { render, fireEvent } from "@testing-library/react";
import SettingsSlider from "./SettingsSlider";

describe("SettingsSlider Component", () => {
  test("should render with default props", () => {
    const onChange = jest.fn();
    const { getByText, getByTestId } = render(
      <SettingsSlider displayCount={10} onChange={onChange} />
    );

    expect(getByText("Display Count:")).toBeInTheDocument();
    expect(getByTestId("settings-slider")).toBeInTheDocument();
  });

  test("should trigger onChange when slider value changes", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <SettingsSlider displayCount={10} onChange={onChange} />
    );
    const sliderInput = getByTestId("settings-slider").querySelector(
      "input"
    ) as HTMLInputElement;
    fireEvent.change(sliderInput, { target: { value: 15 } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
