import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: var(--white);
  min-height: 200px;
  min-width: 300px;
  max-width: 500px;
  text-align: initial;
  @media (min-width: 750px) {
    width: 500px;
  }
  padding: 20px;
  color: var(--dark-purple);
  border-radius: 8px;
  margin-bottom: 20px;
  > h2 {
    font-size: 1.2rem;
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 10px;
  }
  > p {
    margin-bottom: 15px;
    font-size: 1.2rem;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  > button {
    width: 40%;
  }
  > div {
    width: 40%;
  }
`;
