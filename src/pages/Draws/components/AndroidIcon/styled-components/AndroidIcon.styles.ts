import styled from "styled-components";

const Container = styled.div`
  --bgAndroid: #99cc33;
  --colorEyes: #fff;
  inline-size: 68vmin;
  block-size: 90vmin;
  padding: 4vmin 11vmin 16vmin;
`;

const Head = styled.div`
  background-color: var(--bgAndroid, #99cc33);
  inline-size: 46vmin;
  block-size: 23vmin;
  border-radius: 92vmin 92vmin 0 0;
  margin-block-end: 1vmin;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: inherit;
    inline-size: 1.5vmin;
    block-size: 130%;
    inset-block-end: 1vmin;
    border-radius: 0.75vmin;
    inset-inline-start: calc(50% - 0.75vmin);
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
  inline-size: 4vmin;
  block-size: 4vmin;
  background-color: var(--colorEyes, #fff);
  inset-block-start: calc(50% - 2vmin);
  z-index: 1;
  border-radius: 50%;

  &.left {
    inset-inline-start: calc(50% - 9vmin);
  }
  &.right {
    inset-inline-end: calc(50% - 9vmin);
  }
`;

const Body = styled.div`
  background-color: var(--bgAndroid, #99cc33);
  inline-size: 46vmin;
  block-size: 46vmin;
  border-radius: 0 0 5vmin 5vmin;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inline-size: 10vmin;
    block-size: 16vmin;
    background-color: inherit;
    inset-block-end: -16vmin;
    border-radius: 0 0 5vmin 5vmin;
  }

  &::after {
    inset-inline-start: 9vmin;
  }
  &::before {
    inset-inline-end: 9vmin;
  }
`;

const Arm = styled.div`
  background-color: var(--bgAndroid, #99cc33);
  inline-size: 10vmin;
  block-size: 33vmin;
  inset-block-start: 0;
  position: absolute;
  border-radius: 5vmin;

  &.left {
    inset-inline-start: -11.5vmin;
  }
  &.right {
    inset-inline-end: -11.5vmin;
  }
`;

export { Container, Head, Eye, Body, Arm };
