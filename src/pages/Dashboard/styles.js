import styled from "styled-components";

export const DashboardContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  background: var(--bgcolor-dashboard);
  > div {
    text-align: center;
    margin-top: 20px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 1500px) {
    justify-content: space-evenly;
  }
`;
