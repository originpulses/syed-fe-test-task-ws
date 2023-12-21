import React, { useState } from "react";
import Tab from "../Tab/Tab";
import TabPanel from "../TabPanel/TabPanel";
import RankingTable from "../RankingTable/RankingTable";
import SettingsSlider from "../SettingsSlider/SettingsSlider";
import { useSocket } from "../../hooks/useSocket";

export interface IUser {
  userId: string;
  username: string;
  avatar: string;
  email: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [displayCount, setDisplayCount] = useState<number>(10);
  const [tabValue, setTabValue] = useState<number>(0);
  const [highlightedRows, setHighlightedRows] = useState<
    Record<string, boolean>
  >({});

  useSocket(displayCount, setUsers, setHighlightedRows);

  const handleDelete = (userId: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== userId));
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setDisplayCount(newValue as number);
  };

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tab tabValue={tabValue} onTabChange={handleTabChange} />
      <TabPanel activeTab={tabValue} index={0}>
        <RankingTable
          users={users}
          onUserDelete={handleDelete}
          highlightedRows={highlightedRows}
        />
      </TabPanel>
      <TabPanel activeTab={tabValue} index={1}>
        <SettingsSlider
          displayCount={displayCount}
          onChange={handleSliderChange}
        />
      </TabPanel>
    </div>
  );
};

export default Leaderboard;
