import styled from "styled-components";

export const StatsDashStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 850%;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const StatPaneStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 200px;
  height: 200px;
  margin: 12px;
  border-radius: 6px;

  h4 {
    font-family: sans-serif;
  }
`;
