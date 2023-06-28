import styled from "styled-components";

export const StyledResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 0 120px 0;

  form {
    display: flex;
    flex-direction: column;
    width: 450px;
    padding: 25px;
    background-color: white;
    margin: 10px;
    border-radius: 15%;
    justify-content: center;
    align-items: center;
    min-height: 25em;
    border: solid 3px black;
    .submit-session {
      background-color: #50a060;
    }
  }

  input {
    margin: 7px;
    text-align: center;
    width: 175px;
    border: 2px solid grey;
    border-radius: 15px;
    background-color: #ded9d9;
  }

  select {
    margin: 7px;
    width: 175px;
    text-align: center;
    border: 2px solid grey;
    border-radius: 15px;
    background-color: #ded9d9;
  }

  h3 {
    font-size: 28px;
  }

  section {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }
  button {
    border-radius: 20px;
    width: 65px;
    height: 30px;
    border: none;
    background-color: #cd1906;
    color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    font-weight: 700;
    font-size: medium;
    /* margin: 15px 0 40px 0; */
  }
`;
