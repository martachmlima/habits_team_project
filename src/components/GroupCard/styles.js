import styled from "styled-components";

export const ContainerGroup = styled.div`
  background-color: var(--white);
  min-height: 200px;
  width: 300px;
  /* max-width: 500px; */
  text-align: initial;
  padding: 20px;
  color: var(--color-ligth-purple);
  border-radius: 8px;
  margin: 20px;
  border: 1px solid var(--color-stroke);
  box-shadow: 0px 0px 20px 0px rgba(0 0 0/ 15%);
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
  > span {
    cursor: pointer;
  }
  @media screen and (min-width: 420px) {
    width: 400px;
  }
  @media (min-width: 750px) {
    width: 500px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
  > button {
    width: 40%;
  }
  > div {
    width: 40%;
  }
`;
