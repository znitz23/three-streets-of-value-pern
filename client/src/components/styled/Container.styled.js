import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  table {
    display: flex;
    flex-flow: column nowrap;
    background-color: white;
    width: 100%;
    margin: 0 auto;
    border-radius: 4px;
    border: 1px solid #dadada;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
    margin-bottom: 40px;
  }

  tr {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    border-bottom: 1px solid #dadada;
  }

  th,
  td {
    display: flex;
    flex: 1;
    font-size: 17px;
    padding: 8px 0;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ease-in-out;
    margin: 0 5px 0 5px;
  }

  td {
    font-family: sans-serif;
  }
`;
