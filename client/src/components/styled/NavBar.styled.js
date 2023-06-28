import styled from "styled-components";

export const StyledNavBar = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-top: -55px;

  img {
    max-width: 500px;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    img {
      margin-bottom: -110px;
    }
    button {
      margin-bottom: 95px;
      margin-top: 15px;
    }
  }
`;

export const Nav = styled.nav`
  float: right;
  display: flex;
  :hover {
    transform: scale(1.15);
    text-shadow: #304d80 1px 0 7px;
  }
  .toggle-button {
    position: absolute;
    top: 6rem;
    right: 2rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
  }

  .bar {
    height: 3px;
    width: 100%;
    background-color: black;
    border-radius: 10px;
  }

  .navLink {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 30px;
    text-decoration: none;
  }

  button {
    border-radius: 20px;
    width: 150px;
    height: 35px;
    border: none;
    background-color: #50a060;
    color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    font-weight: 700;
    font-size: large;
    margin-right: 20px;
    margin-left: 20px;
    :hover {
      transform: scale(1.15);
      text-shadow: #304d80 1px 0 7px;
    }
  }
  @media only screen and (max-width: 768px) {
    .navLink,
    button {
      display: flex;
    }

    button {
      align-items: center;
      justify-content: center;
    }

    flex-direction: column;
  }
`;
