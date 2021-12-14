import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(231, 171, 171, 1) 0%,
    rgba(147, 32, 194, 1) 100%
  );
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const SectionsMenu = styled.section`
  width: 90%;
  height: fit-content;
  min-height: 70vh;
  background-color: var(--white);
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-radius: 12px;
  margin-top: 50px;
  .description {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .description_info_title {
    font-size: 2rem;
    color: var(--dark-purple);
    span {
      font-size: 1.8rem;
      font-weight: normal;
    }
  }
  .description_button {
    flex-base: 40%;
    padding: 0 0 0 5%;
    display: flex;
    align-items: center;
  }
  .buttonlink {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid gray;
    padding: 10px 0 20px;
    color: var(--dark-purple);
    button {
      font-size: 2rem;
      color: var(--dark-purple);
      background-color: transparent;
      border: none;
      margin: 0 10px;
    }
  }
  .cards {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
