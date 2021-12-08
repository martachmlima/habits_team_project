import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(147, 32, 194, 1) 0%,
    rgba(231, 171, 171, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #dfc2eb;
    span {
      font-size: inherit;
      font-weight: 400;
      letter-spacing: inherit;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
      font-size: 3rem;
      color: #dfc2ea;
      font-weight: 500;
      margin-bottom: 60px;
    }
    .menu_bottoes {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      button + button {
        margin-left: 20px;
      }
    }
    .menu_bottoes button {
      font-size: 3rem;
      height: 70px;
      min-width: 300px;
      border-radius: 5px;
      color: #9320c2;
      border: none;
    }
  }
  h3 {
    font-size: 1.5rem;
    color: #dfc2ea;
  }
  p {
    font-size: 1.5rem;
    color: #dfc2ea;
  }
`;
