import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 80vh;
  min-height: 600px;
  background: red;
  margin: 30px 0 20px 20px;
  padding: 15px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: pink;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;
