import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  background: var(--bgcolor-dashboard)
  display: flex;
  flex-direction: column;
`;

export const GroupsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Box = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    color: var(--color-cardAside);
    text-align: center;
    margin: 15px 0 0;
  }
`;
