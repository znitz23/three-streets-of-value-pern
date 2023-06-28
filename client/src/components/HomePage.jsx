import React, { useState } from "react";
import { Nav } from "./styled/NavBar.styled";
import Register from "./Register";
import Login from "./Login";
import { CredentialsStyled, WelcomeStyled } from "./styled/Home.styled";
import { Container } from "./styled/Container.styled";

const HomePage = ({ token, setToken, setUser, setIsLoggedIn, isLoggedIn }) => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <>
      {!isLoggedIn ? (
        <Container>
          {!showLogIn && !showRegister ? (
            <WelcomeStyled>
              <h1>Welcome to 3 Streets of Value.</h1>
              <span>
                Please
                <button onClick={() => setShowLogIn(true)}>
                  Login
                </button> or{" "}
                <button onClick={() => setShowRegister(true)}>Register</button>
              </span>
            </WelcomeStyled>
          ) : (
            <></>
          )}

          {showRegister ? (
            <CredentialsStyled>
              <section>
                <button
                  onClick={() => setShowRegister(false)}
                  className="close"
                >
                  Close
                </button>
                <Register
                  token={token}
                  setToken={setToken}
                  setIsLoggedIn={setIsLoggedIn}
                  setUser={setUser}
                />
              </section>
            </CredentialsStyled>
          ) : (
            <></>
          )}
          {showLogIn ? (
            <CredentialsStyled>
              <button onClick={() => setShowLogIn(false)} className="close">
                Close
              </button>
              <section>
                <Login
                  token={token}
                  setToken={setToken}
                  setIsLoggedIn={setIsLoggedIn}
                  setUser={setUser}
                />
              </section>
            </CredentialsStyled>
          ) : (
            <></>
          )}
        </Container>
      ) : (
        <Container>
          <WelcomeStyled>
            <h1>Welcome back to 3 Streets of Value.</h1>
          </WelcomeStyled>
        </Container>
      )}
    </>
  );
};

export default HomePage;
