import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 80vh;
  min-height: 500px;
  max-height: 600px;
  background: red;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--white);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid var(--color-stroke);
  box-shadow: 0px 0px 20px 0 rgb(0 0 0 / 15%);

  .aside_header {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 2px solid var(--color-aside);
    padding-bottom: 10px;
    margin-bottom: 25px;

    svg {
      font-size: 60px;
      color: var(--color-aside);
    }
    h1 {
      font-size: 1.8rem;
      color: var(--color-aside);
    }
    h1:hover {
      color: var(--color-cardAside);
    }
  }

  section {
    overflow: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10px;
    align-items: center;
  }

  footer {
    height: 170px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-top: 2px solid var(--color-aside);
    margin-top: 20px;
    padding-top: 10px;
  }
  @media screen and (min-width: 800px) {
    margin: 30px 0 20px 20px;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  background-color: var(--bgcolor-cardGroupAside);
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  border: 1px solid transparent;
  border-radius: 6px;
  :hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
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
    color: var(--color-cardAside);
  }
`;
