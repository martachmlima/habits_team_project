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
`;
