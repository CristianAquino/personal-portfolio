import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
  inline-size: 200px;
  block-size: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  position: absolute;
  inline-size: 150px;
  block-size: 150px;
  border-radius: 50%;
  object-fit: cover;
`;
const animation = keyframes`
    0%{rotate:1turn}
    100%{rotate:0turn}
`;
const Text = styled.p`
  color: #fff;
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  animation: ${animation} 10s linear infinite;
  & span {
    position: absolute;
    inset-inline-start: 50%;
    font-size: 1.2rem;
    transform-origin: 0 100px;
  }
`;
export { Container, Image, Text };
