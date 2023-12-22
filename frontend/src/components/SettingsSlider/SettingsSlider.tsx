import React from "react";
import { Box, Typography, Slider } from "@mui/material";

interface ISettingsSliderProps {
  displayCount: number;
  onChange: (event: Event, newValue: number | number[]) => void;
}

const SettingsSlider: React.FC<ISettingsSliderProps> = ({
  displayCount,
  onChange,
}) => {
  return (
    <Box p={3}>
      <Typography gutterBottom>Display Count:</Typography>
      <Slider
        value={displayCount}
        onChange={onChange}
        aria-labelledby="discrete-slider"
        data-testid="settings-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={[
          { value: 1, label: "1" },
          { value: 20, label: "20" },
        ]}
        min={1}
        max={20}
      />
    </Box>
  );
};

export default SettingsSlider;
