import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-image: linear-gradient(to right, #9f65e1 51%, #6760ea 100%);
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  margin: 10px auto;
  cursor: pointer;
  :hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;
