import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: ${(props) => (props.path === "dashboard" ? "60%" : "90%")};
  height: 100px;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  color: var(--dark-purple);
  border-radius: 12px;
  margin: 10px auto;

  > h1 {
    font-size: 2rem;
    cursor: pointer;
  }
  > span {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  > p {
    margin-left: 10px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  > input {
    width: 200px;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;
  }
  > svg {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;
