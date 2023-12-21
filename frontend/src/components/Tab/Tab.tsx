import React from "react";
import { Tabs as MuiTabs, Tab as MuiTab } from "@mui/material";

interface TabProps {
  tabValue: number;
  onTabChange: (newValue: number) => void;
}

const Tab: React.FC<TabProps> = ({ tabValue, onTabChange }) => {
  return (
    <MuiTabs value={tabValue} onChange={(e, newValue) => onTabChange(newValue)}>
      <MuiTab label="Leaderboard" />
      <MuiTab label="Settings" />
    </MuiTabs>
  );
};

export default Tab;
