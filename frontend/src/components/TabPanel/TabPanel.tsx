import React from "react";
import { Box } from "@mui/material";

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  activeTab: number;
}

const TabPanel: React.FC<ITabPanelProps> = ({
  children,
  index,
  activeTab,
  ...rest
}) => {
  const isActiveTab = activeTab === index;

  return (
    <div role="tabpanel" hidden={!isActiveTab} {...rest}>
      {isActiveTab && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
