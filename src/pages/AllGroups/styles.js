import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  background: linear-gradient(
    0deg,
    rgba(231, 171, 171, 1) 0%,
    rgba(147, 32, 194, 1) 100%
  );
  display: flex;
  flex-direction: column;
`;

export const GroupsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
