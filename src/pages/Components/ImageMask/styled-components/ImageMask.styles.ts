import styled from "styled-components";

const Container = styled.div`
  position: relative;
  inline-size: 96vmin;
  block-size: 80vmin;
`;
const Thumbnail = styled.img`
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  z-index: 1;
`;
const Background = styled.img`
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  z-index: 2;
  mix-blend-mode: screen;
`;
export { Thumbnail, Background, Container };
