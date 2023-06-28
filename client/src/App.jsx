import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import HomePage from "./components/HomePage.jsx";
import Statistics from "./components/Statistics.jsx";
import Results from "./components/Results.jsx";
import { fetchSessions } from "./api/sessions.js";
import { fetchUser } from "./api/users.js";
import { Container } from "./components/styled/Container.styled.js";

function App() {
  const [sessions, setSessions] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [addedSession, setAddedSession] = useState(false);

  useEffect(() => {
    const getInitialData = async () => {
      if (token) {
        const me = await fetchUser(token);
        setUser(me);
        setIsLoggedIn(true);
      }
    };
    getInitialData();
  }, [token]);

  useEffect(() => {
    const getInitialSessions = async () => {
      if (token) {
        const fetchedSessions = await fetchSessions(token);
        setSessions(fetchedSessions);
      }
    };
    getInitialSessions();
  }, [addedSession]);

  return (
    <>
      <Container>
        <Navbar
          token={token}
          setToken={setToken}
          setIsLoggedIn={setIsLoggedIn}
          setUser={setUser}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                token={token}
                setToken={setToken}
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/results"
            element={
              <Results
                token={token}
                sessions={sessions}
                setSessions={setSessions}
                user={user}
                addedSession={addedSession}
                setAddedSession={setAddedSession}
              />
            }
          />
          <Route
            path="/statistics"
            element={<Statistics sessions={sessions} user={user} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
