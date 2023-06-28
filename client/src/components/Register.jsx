import React, { useEffect, useState } from "react";
import { authenticateNewUser } from "../api/authenitcate.js";
import { fetchUser } from "../api/users.js";
import { CredentialsStyled } from "./styled/Home.styled.js";

const Register = ({ setToken, setIsLoggedIn, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !firstName || !lastName || !password) {
      alert("Must enter a username, first name, last name and password.");
    } else {
      const data = await authenticateNewUser({
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
      });
      const user = await fetchUser(data.token);
      if (data.token) {
        setToken(data.token);
        setIsLoggedIn(true);
        setUser(user);
      } else {
        alert("That Username is already taken");
      }
      setUsername("");
      setPassword("");
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <>
      <CredentialsStyled>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          ></input>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
          <input
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button type="submit">Register</button>
        </form>
      </CredentialsStyled>
    </>
  );
};

export default Register;
