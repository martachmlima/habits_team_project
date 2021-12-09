import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 80vh;
  min-height: 500px;
  background: red;
  margin: 30px 0 20px 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: pink;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  .card_icon {
    padding-right: 10px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #32c5aa;
  }
  h3 {
    font-size: 13px;
    color: #32c5aa;
  }
`;
