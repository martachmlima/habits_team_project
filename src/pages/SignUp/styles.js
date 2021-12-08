import styled from "styled-components";

export const Conteiner = styled.div`
  background: linear-gradient(
    0deg,
    rgba(147, 32, 194, 1) 0%,
    rgba(231, 171, 171, 1) 100%
  );
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ConteinerImg = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  img {
    width: 90%;
  }
  @media screen and (min-width: 600px) {
    width: 45%;
  }
`;

export const ConteinerTitle = styled.div`
  h1 {
    position: absolute;
    top: -42%;
    left: 25%;
    color: #dfc2eb;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 84px;
  }
  h2 {
    position: absolute;
    top: -24%;
    left: 44%;
    color: #dfc2eb;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 84px;
  }
  @media screen and (min-width: 435px) {
    h1 {
      top: -28%;
      left: 25%;
    }
    h2 {
      top: -11%;
      left: 44%;
    }
    @media screen and (min-width: 500px) {
    h1 {
      top: -16%;
      left: 35%;
    }
    h2 {
      top: -8%;
      left: 54%;
    }
  }
  @media screen and (min-width: 600px) {
    h2 {
      position: absolute;
      top: 18%;
      left: 35%;
      font-size: 72px;
    }
    h1 {
      position: absolute;
      top: 10%;
      left: 20%;
      font-size: 72px;
    }
  }
`;

export const ConteinerForm = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    height: 80%;
    width: 80%;
    margin: 0 auto;
    label {
      line-height: 1.8;
      padding: 4px;
      color: var(--cinza-placeholder);
    }
  }
  @media screen and (min-width: 600px) {
    width: 45%;
  }
`;

export const ConteinerFormGradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(233, 213, 241, 0.1) 0%,
    #e9d5f1 100%
  );
  width: 95%;
  min-height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 16px;
`;

export const Button = styled.button`
  background: #9c27b0;
  border-radius: 8px;
  color: var(--branco);
  border: none;
  height: 70px;
  margin: 18px auto;
  width: 99%;
  cursor: pointer;
  font-size: large;
`;
