import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  div {
    width: 100%;
  }
  @media screen and (min-width: 720px) {
    width: 570px;
    div {
      width: 100%;
    }
  }
`;
