import styled, { keyframes } from "styled-components";

const slide = keyframes`
from{transform:translateX(0)}
to{transform:translateX(-100%)}
`;
const List = styled.ul`
  white-space: nowrap;
  margin-block: 1rem;
  animation: ${slide} 10s linear infinite;
`;
const Item = styled.li`
  display: inline-flex;
  list-style: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  border-radius: 0.5rem;
  letter-spacing: 0.2rem;

  &:hover {
    background-color: #00a1ff;
    cursor: pointer;
  }
`;
const Container = styled.div`
  position: relative;
  inline-size: 450px;
  display: flex;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  mask-image: linear-gradient(
    to right,
    transparent,
    #fff 20%,
    #fff 80%,
    transparent
  );

  &:hover ${List} {
    animation-play-state: paused;
  }
`;
export { Container, Item, List };
