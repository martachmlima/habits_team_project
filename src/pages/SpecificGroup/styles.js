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
      font-size: 1.2rem;
      color: var(--dark-purple);
  }
  }
  .description_button {
    flex-base: 40%;
    padding: 0 0 0 5%;
    display: flex;
    align-items: center;
  }
`;
