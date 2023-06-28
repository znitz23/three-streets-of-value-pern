import React, { useState } from "react";
import CreateSession from "./CreateSession";
import { Container } from "./styled/Container.styled";
import { StyledResults } from "./styled/Results.styled";
import DeleteSession from "./DeleteSession";

const Results = ({
  sessions,
  user,
  addedSession,
  setAddedSession,
  setSessions,
  token,
}) => {
  const userSessions = sessions.filter(
    (session) => session.username === user.username
  );
  const chronoSort = (myArr) => {
    let fir;
    let sec;
    let duration = myArr.length - 1;
    for (let i = 0; i < myArr.length - 1; i++) {
      for (let j = 0; j < duration; j++) {
        if (myArr[j].date > myArr[j + 1].date) {
          fir = myArr[j];
          sec = myArr[j + 1];
          myArr[j] = sec;
          myArr[j + 1] = fir;
        }
      }
      duration--;
    }
    return myArr;
  };
  const sessionsToRender = chronoSort(userSessions);

  let wl = 0;
  return (
    <>
      <Container>
        <StyledResults>
          <CreateSession
            user={user}
            addedSession={addedSession}
            setAddedSession={setAddedSession}
            token={token}
          />
          <section>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Game</th>
                  <th>Duration</th>
                  <th>Buy In</th>
                  <th>Cash Out</th>
                  <th>W/L</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {userSessions ? (
                  userSessions.map((dailySession) => {
                    return (
                      <tr key={dailySession.id}>
                        <td>{dailySession.date}</td>
                        <td>{dailySession.day}</td>
                        <td>{dailySession.game}</td>
                        <td>{dailySession.duration}</td>
                        <td>
                          ${new Intl.NumberFormat().format(dailySession.buy_in)}
                        </td>
                        <td>
                          $
                          {new Intl.NumberFormat().format(
                            dailySession.cash_out
                          )}
                        </td>
                        <td>
                          ${new Intl.NumberFormat().format(dailySession.wl)}
                        </td>
                        <td>
                          <DeleteSession
                            sessionId={dailySession.id}
                            user={user}
                            setSessions={setSessions}
                            token={token}
                          />
                        </td>
                        {/* <td>{dailySession.notes}</td> */}
                      </tr>
                    );
                  })
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </section>
        </StyledResults>
      </Container>
    </>
  );
};

export default Results;
