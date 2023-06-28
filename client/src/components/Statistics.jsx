import React from "react";
import DailyAverages from "./DailyAverages.jsx";
import StatsDashboard from "./StatsDashboard.jsx";

const Statistics = ({ sessions, user }) => {
  return (
    <>
      <StatsDashboard sessions={sessions} user={user} />
      <DailyAverages sessions={sessions} user={user} />
    </>
  );
};

export default Statistics;
