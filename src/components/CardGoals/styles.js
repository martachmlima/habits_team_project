import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 15px 10px;
  padding: 10px;
  width: 300px;
  min-height: 200px;
  border-radius: 8px;
  background-color: var(--purple);
  .info {
    height: calc(100% - 65px);
    overflow: auto;
  }
  h3 {
    font-size: 1.4rem;
    color: var(--color-cardGroup-purple);
    margin-bottom: 15px;
    span {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 10%;
  }
  @media screen and (min-width: 500px) {
    h3 {
      font-size: 1.8rem;
    }
    span {
      font-size: 1.5rem;
    }
  }
`;
