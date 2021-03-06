import styled from "styled-components";

export const ConteinerNav = styled.div`
  width: 80px;
  button {
    background-color: var(--white);
    color: rgb(55, 65, 81);
    :hover {
      background-color: #f0f0f0f0;
    }
  }

  @media (min-width: 750px) {
    width: 170px;
  }
  @media (min-width: 1000px) {
    width: 150px;
  }
`;
