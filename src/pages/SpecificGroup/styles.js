import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: var(--bgcolor-dashboard)
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const SectionsMenu = styled.section`
  width: 90%;
  height: fit-content;
  min-height: 70vh;
  background-color: var(--white);
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-radius: 12px;
  margin-top: 50px;
  border: 1px solid var(--color-stroke);
  box-shadow: 0px 0px 20px 0px rgba(0 0 0 / 20%);
  .description {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .description_info_title {
    font-size: 1.5rem;
    color: var(--color-ligth-purple);
    span {
      font-size: 1.4rem;
      font-weight: normal;
    }
  }
  .description_button {
    flex-basis: 40%;
    padding: 0 0 0 5%;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .buttonlink {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid var(--color-ligth-purple);
    padding: 10px 0 20px;
    color: var(--color-ligth-purple);
    button {
      font-size: 1.5rem;
      color: var(--color-ligth-purple);
      background-color: transparent;
      border: none;
      margin: 0 10px;
    }
    span {
      font-size: 2em;
    }
  }
  .cards {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .buttonlink .buttonGoal {
    color: ${(props) => (props.render === 'goals' ? 'var(--color-cardAside)' : "var(--color-ligth-purple)")};
    border-bottom: ${(props) => (props.render === 'goals' ? '3px solid var(--color-cardAside)' : "3px solid transparent")};
  }  
  .buttonlink .buttonActiv {
    color: ${(props) => (props.render !== 'goals' ? 'var(--color-cardAside)' : "var(--color-ligth-purple)")};
    border-bottom: ${(props) => (props.render !== 'goals' ? '3px solid var(--color-cardAside)' : "3px solid transparent")};
  }
  @media (min-width: 500px) {
    .description {
      flex-direction: row;
    }
    .description_info_title {
      font-size: 2rem;
    }
    span {
      font-size: 1.8rem;
    }
    button {
      font-size: 2rem;
    }
  }
`;
