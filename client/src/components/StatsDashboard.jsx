import React from "react";
import { StatPaneStyled, StatsDashStyled } from "./styled/StatsDash.styled";

const StatsDashboard = ({ sessions, user }) => {
  const userSessions = sessions.filter(
    (session) => session.username === user.username
  );

  const calculateStats = (array) => {
    let totalWl = 0;
    let hoursPlayed = 0;
    const sessionsPlayed = array.length;
    for (let i = 0; i < array.length; i++) {
      totalWl += array[i].wl;
      hoursPlayed += +array[i].duration;
    }
    const avgLength = hoursPlayed / sessionsPlayed;
    return { totalWl, hoursPlayed, sessionsPlayed, avgLength };
  };

  const data = calculateStats(userSessions);
  return (
    <>
      <StatsDashStyled>
        <StatPaneStyled>
          <h3>Total Win/Loss</h3>
          <h4>${new Intl.NumberFormat().format(data.totalWl)}</h4>
        </StatPaneStyled>
        <StatPaneStyled>
          <h3>Sessions Played</h3>
          <h4>{data.sessionsPlayed}</h4>
        </StatPaneStyled>
        <StatPaneStyled>
          <h3>Hours Played</h3>
          <h4>{data.hoursPlayed}</h4>
        </StatPaneStyled>
        <StatPaneStyled>
          <h3>Avg. Session(hrs)</h3>
          <h4>{Math.floor(data.avgLength)}</h4>
        </StatPaneStyled>
        <StatPaneStyled>
          <h3>Hourly</h3>
          <h4>${Math.floor(data.totalWl / data.hoursPlayed)}</h4>
        </StatPaneStyled>
      </StatsDashStyled>
    </>
  );
};

export default StatsDashboard;
