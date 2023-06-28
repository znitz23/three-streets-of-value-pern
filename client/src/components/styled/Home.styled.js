import styled from "styled-components";

export const CredentialsStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  max-width: 200px;
  margin: 0 auto;

  .close {
    max-width: 25px;
    border-radius: 0%;
    position: absolute;
    right: 50px;
    top: -20px;
    border: none;
    background-color: white;
    font-size: 18px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px 0;
    input,
    button {
      margin: 7px 0 7px 0;
    }

    button {
      border-radius: 20px;
      width: 100px;
      height: 35px;
      border: none;
      background-color: #50a060;
      color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
      font-weight: 700;
      font-size: large;
      margin-right: 20px;
      margin-left: 20px;
    }
  }

  section {
    border: 3px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const WelcomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 50px;
  }

  button {
    background-color: white;
    border: none;
    font-family: "Permanent Marker", cursive;
    color: blue;
    text-shadow: 5em;
  }
`;
