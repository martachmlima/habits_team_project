import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: flex-start;
  align-items: center;
  height: 550px;
  overflow: auto;
  width: 530px;
  @media screen and (min-width: 1500px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 1050px;
    justify-content: space-around;
    align-content: flex-start;
  }
  @media screen and (min-width: 1900px) {
    width: 1200px;
  }
`;
