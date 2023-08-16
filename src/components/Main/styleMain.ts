import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #00e0ff;
  padding: auto;
`;

export const MainTittle = styled.div`
  width: 90vw;
  height: 200px;
  text-align: center;
  margin: auto;
  margin-top: 30vh;
  font-size: 5em;
`;

export const ButtonLine = styled.div`
  display: flex;
  justify-content: center;
`;

export const GameButtonLink = styled(Link)`
  background-color: #d9d9d9;
  border: 1px solid #000000;
  border-radius: 20px;
  width: 10rem;
  height: 5rem;
  display: grid;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
`;

export const BetweenBox = styled.div`
  width: 10 rem;
`;

export const ButtonText = styled.div`
  width: 100px;
  text-align: center;
`;

export const TimeBox = styled.div`
  position: fixed;
  right: 1em;
  top: 1em;
  background-color: white;
  width: 15em;
  height: 3em;
  text-align: center;
  padding-top: 1.5em;
  border: 1px solid black;
  border-radius: 30em;
`;
