import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 90%;
  height: fit-content;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  color: var(--color-ligth-purple);
  border-radius: 12px;
  margin: 0 auto;
  border: 1px solid var(--color-stroke);
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.15);
  h1 {
    font-size: 1.7rem;
    cursor: pointer;
    @media (min-width: 800px) {
      font-size: 2.5rem;
    }
  }
  > span {
    cursor: pointer;
  }
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const SectionMobile = styled.section`
  @media (min-width: 800px) {
    display: none;
  }
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin-left: 10px;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

export const SearchContainer = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  > input {
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;
    border: solid 2px var(--color-ligth-purple);
  }
  > svg {
    height: 40px;
    width: 40px;
    cursor: pointer;
    color: var(--color-ligth-purple);
  }
`;

export const SearchMobile = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  > input {
    width: 70%;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;
    border: solid 2px var(--color-ligth-purple);
  }
  > svg {
    height: 40px;
    width: 40px;
    cursor: pointer;
    color: var(--color-ligth-purple);
  }
`;
