import styled, { keyframes } from "styled-components";

const slide = keyframes`
from{transform:translateX(0)}
to{transform:translateX(-100%)}
`;
const List = styled.ul`
  margin-block: 1rem;
  animation: ${slide} 10s linear infinite;
  display: inline-block;
`;
const Item = styled.li`
  display: inline;
  list-style: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  border-radius: 0.5rem;

  &:hover {
    background-color: #00a1ff;
  }
`;
const Container = styled.div`
  position: relative;
  inline-size: 450px;
  white-space: nowrap;
  overflow: hidden;
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
