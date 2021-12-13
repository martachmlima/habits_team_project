import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 80vh;
  min-height: 500px;
  max-height: 600px;
  background: red;
  margin: 30px 0 20px 20px;
  padding: 15px;
  border-radius: 8px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 800px) {
    display: none;
  }

  .aside_header {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 2px solid #8d8d8d;
    padding-bottom: 10px;
    margin-bottom: 35px;
    svg {
      font-size: 60px;
      color: #8d8d8d;
    }
    h1 {
      font-size: 1.8rem;
      color: #8d8d8d;
    }
  }
  section {
    overflow: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  footer {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #8d8d8d;
    margin-top: 20px;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  background-color: #f5fcfb;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  border: 1px solid transparent;
  :hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    box-shadow: 4px 4px 20px 6px rgba(100, 100, 100, 0.25);
  }
  .card_icon {
    margin-right: 10px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9d6fe1;
    svg {
      color: white;
    }
  }
  h3 {
    font-size: 13px;
    color: #32c5aa;
  }
`;
