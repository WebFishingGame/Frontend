import styled from "styled-components";

export const RiverBackground = styled.div`
  width: calc(100vw - 1em);
  height: calc(100vh - 1em);
  background-color: #00e0ff;
  padding-top: 1em;
  padding-left: 1em;
`;

export const InventoryBoxes = styled.div`
  max-height: 18em;
  min-height: 12em;
  max-width: 30em;
  min-width: 20em;
  width: 40vw;
  height: 28vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const InventoryBox = styled.div`
  max-height: 9em;
  min-height: 6em;
  max-width: 6em;
  min-width: 4em;
  width: 8vw;
  height: 14vh;
  border: 1px solid black;
  background-color: white;
`;
