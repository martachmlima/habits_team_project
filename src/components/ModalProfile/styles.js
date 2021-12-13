import styled, { css } from "styled-components";

export const ConteinerNav = styled.div`
  width: 100px;

  ${(props) =>
    props.open &&
    css`
      position: absolute;
      width: 90vw;
      top: 8%;
      z-index: 2;
    `};

  @media (min-width: 750px) {
    width: 300px;
    ${(props) =>
      props.open &&
      css`
        position: absolute;
        width: 40vw;
        top: 10%;
        right: 10%;
        z-index: 2;
      `};
  }
`;
