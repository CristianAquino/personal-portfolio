import styled, { keyframes } from "styled-components";

const Container = styled.section`
  position: relative;
  inline-size: 400px;
  block-size: 400px;
  transform-style: preserve-3d;
  perspective: 1000px;
`;
const animate = keyframes`
    0%{transform:rotateY(270deg)}
    10%,100%{transform:rotateY(90deg)}
    `;

const Slide = styled.div<{ $i: number }>`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: start;
  align-items: start;
  transform: rotateY(270deg);
  transform-style: preserve-3d;
  animation: ${animate} 20s linear infinite;
  animation-delay: ${({ $i }) => $i * 2}s;
`;
const Title = styled.h2`
  position: relative;
  z-index: 10;
  color: #fff;
  font-size: 10rem;
  transform: rotateY(180deg) translateY(100px) translateZ(50px);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  font-weight: 900;
  -webkit-text-stroke: 1px #000;

  & span {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-start: 0;
    font-size: 2.5rem;
    font-weight: 500;
    transform: translate(0, 50%) translateZ(50px);
    backface-visibility: hidden;
  }
`;
const Img = styled.img`
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

export { Container, Img, Slide, Title };
