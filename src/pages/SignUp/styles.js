import styled from "styled-components";

export const Conteiner = styled.div`
  background: linear-gradient(
    0deg,
    rgba(147, 32, 194, 1) 0%,
    rgba(231, 171, 171, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
`;

export const ConteinerImg = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    display: none;
  }
  @media screen and (min-width: 600px) {
    width: 50%;
    img {
      width: 90%;
      display: block;
    }
  }
`;

export const ConteinerTitle = styled.div`
  h1 {
    position: absolute;
    top: 0%;
    left: 25%;
    color: #dfc2eb;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 84px;
  }
  h2 {
    position: absolute;
    top: 4%;
    left: 45%;
    color: #dfc2eb;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 84px;
  }

  @media screen and (min-width: 600px) {
    h1 {
      position: absolute;
      top: 4%;
      left: 10%;
      font-size: 72px;
    }
    h2 {
      position: absolute;
      top: 12%;
      left: 26%;
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
    button {
      background: #9c27b0;
      border-radius: 8px;
      color: var(--branco);
      border: none;
      height: 70px;
      margin: 18px auto;
      width: 96%;
      cursor: pointer;
      font-size: large;
      :hover {
        background-color: var(--white);
        color: #9c27b0;
        border: solid 1px #9c27b0;
      }
    }
    a {
      margin: 12px auto;
      :hover {
        color: #9c27b0;
      }
    }
    label {
      line-height: 1.8;
      padding: 4px;
      color: var(--cinza-placeholder);
    }
  }
  @media screen and (min-width: 600px) {
    width: 50%;
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
  margin-top: 30%;
  @media screen and (min-width: 600px) {
    margin: 0 auto;
  }
`;
export const ConteinerBox = styled.div`
  max-width: 1400px;
  max-height: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;
