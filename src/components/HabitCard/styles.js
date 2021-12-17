import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: var(--white);
  //min-height: 220px;
  width: 270px;
  text-align: initial;
  border: 1px solid var(--color-stroke);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 400px) {
    width: 350px;
  }
  @media (min-width: 750px) {
    width: 500px;
  }
  padding: 20px;
  color: var(--color-ligth-purple);
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
    > section {
      color: var(--color-cardAside);
      width: 60%;
      text-align: end;
    }
  }
  .meta {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
    font-size: 1.2rem;
  }
  .progress {
    margin-left: 5px;
    border: solid 1px var(--color-cardAside);
    width: 90px;
    border-radius: 5px;
    display: flex;
  }

  .alert {
    color: var(--color-cardAside);
    text-align: end;
    width: 50%;
  }
  .colorbar {
    background-color: var(--color-cardAside);
    height: 100%;
    border-radius: 5px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > button {
    width: 49%;
  }
  > div {
    width: 50%;
  }
`;
