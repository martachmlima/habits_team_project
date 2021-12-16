import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-around;
  background: linear-gradient(180deg, #e7abab 0%, #9320c2 100%);
  height: 100vh;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const ConteinerBox = styled.div`
  max-height: 1000px;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;
  justify-content: space-around;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export const ContainedSvg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 290px;
  align-items: center;
  transition: 0.5s;
  img {
    transition: 0.5s;
    display: none;
  }
  h1 {
    display: block;
    cursor: pointer;
    transition: 0.5s;
    font-size: 62px;
    color: #dfc2eb;
    span {
      transition: 0.5s;
      display: block;
      font-size: 62px;
      margin-left: 100px;
      font-weight: normal;
    }
  }
  @media screen and (min-width: 700px) {
    width: 230px;
    h1 {
      font-size: 72px;
      span {
        font-size: 72px;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    width: 540px;
    height: 80vh;
    h1 {
      span {
        margin-left: 130px;
      }
    }
    img {
      display: block;
      width: 500px;
    }
  }
  @media screen and (min-width: 1400px) {
    width: 760px;
    img {
      width: 750px;
    }
  }
`;

export const ConteinerForm = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    height: 80%;
    width: 300px;
    margin: 0 auto;
    align-items: center;
    div {
      transition: 0.5s;
      width: 280px;
      background: #eee3f3;
      border-radius: 12px;
      label {
        margin-top: 3px;
      }
    }
   
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
  @media screen and (min-width: 700px) {
    width: 395px;
    form {
      width: 395px;
      div {
        width: 350px;
      }
      button {
        width: 320px;
      }
    }
  }
  @media screen and (min-width: 1400px) {
    width: 495px;
    form {
      width: 495px;
      div {
        width: 450px;
      }
      button {
        width: 420px;
      }
    }
  }
`;

export const ConteinerFormGradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(233, 213, 241, 0.1) 0%,
    #e9d5f1 100%
  );
  width: 300px;
  min-height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 16px;
  margin-top: 30%;
  @media screen and (min-width: 00px) {
    margin: 0 auto;
    width: 395px;
  }
  @media screen and (min-width: 1400px) {
    width: 495px;
  }
`;
