import styled from "styled-components";

const Container = styled.div`
  width: 68vmin;
  height: 90vmin;
  padding: 4vmin 11vmin 16vmin;
`;

const Head = styled.div`
  --bgAndroid: #99cc33;
  background-color: var(--bgAndroid);
  width: 46vmin;
  height: 23vmin;
  border-radius: 92vmin 92vmin 0 0;
  margin-bottom: 1.5vmin;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: inherit;
    width: 1.5vmin;
    height: 130%;
    bottom: 0;
    border-radius: 0.75vmin;
    left: calc(50% - 0.75vmin);
    transform-origin: 50% 100%;
  }

  &::before {
    rotate: -30deg;
  }
  &::after {
    rotate: 30deg;
  }
`;

const Eye = styled.div`
  position: absolute;
  width: 4vmin;
  height: 4vmin;
  background-color: #fff;
  top: calc(50% - 2vmin);
  z-index: 1;
  border-radius: 50%;

  &.left {
    left: calc(50% - 9vmin);
  }
  &.right {
    right: calc(50% - 9vmin);
  }
`;

const Body = styled.div`
  --bgAndroid: #99cc33;
  background-color: var(--bgAndroid);
  width: 46vmin;
  height: 46vmin;
  border-radius: 0 0 5vmin 5vmin;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10vmin;
    height: 16vmin;
    background-color: inherit;
    bottom: -16vmin;
    border-radius: 0 0 5vmin 5vmin;
  }

  &::after {
    left: 9vmin;
  }
  &::before {
    right: 9vmin;
  }
`;

const Arm = styled.div`
  --bgAndroid: #99cc33;
  background-color: var(--bgAndroid);
  width: 10vmin;
  height: 33vmin;
  top: 0;
  position: absolute;
  border-radius: 5vmin;

  &.left {
    left: -11.5vmin;
  }
  &.right {
    right: -11.5vmin;
  }
`;

export { Container, Head, Eye, Body, Arm };
