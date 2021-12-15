import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 500px;
  overflow: auto;
  width: 320px;
  padding-top: 15px;
  @media screen and (min-width: 420px) {
    margin-top: 30px;
    width: 400px;
    height: 550px;
  }
  @media screen and (min-width: 540px) {
    width: 530px;
    padding-top: 0;
    height: 595px;
  }
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
