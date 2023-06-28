import React from "react";
import { Container } from "./styled/Container.styled";

const DailyAverages = ({ sessions, user }) => {
  const userSessions = sessions.filter(
    (session) => session.username === user.username
  );
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dailySessions = (string) => {
    const day = userSessions.filter((session) => session.day === string);
    return day;
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Total</th>
              <th>Hourly</th>
            </tr>
          </thead>
          {sessions.length ? (
            <tbody>
              {days.map((day) => {
                const dailyData = dailySessions(day);
                let sum = 0;
                let hours = 0;
                for (let i = 0; i < dailyData.length; i++) {
                  sum += dailyData[i].wl;
                  hours += +dailyData[i].duration;
                }
                const hourly = sum / hours;
                return (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>${new Intl.NumberFormat().format(sum)}</td>
                    <td>${Math.floor(hourly)}</td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <></>
          )}
        </table>
      </div>
    </>
  );
};

export default DailyAverages;
