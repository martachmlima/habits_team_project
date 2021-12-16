import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 15px 10px;
  padding: 10px;
  width: 300px;
  min-height: 200px;
  border-radius: 8px;
  background-color: var(--secondary-purple);
  .info {
    height: calc(100% - 65px);
    overflow: auto;
  }
  h3 {
    font-size: 1.8rem;
    color: var(--dark-purple);
    margin-bottom: 15px;
    span {
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* padding: 10px 10%; */
    width: 100%;
    > button {
      width: 40%;
    }
    > div {
      width: 40%;
    }
  }
`;
