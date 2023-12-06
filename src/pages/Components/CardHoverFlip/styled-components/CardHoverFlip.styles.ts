import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
`;
const Box = styled.div`
  position: relative;
  inline-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
`;
const Content = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  transition-delay: 0s;
  transition: 0.5s;
  opacity: 0;

  & h2 {
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: var(--bg);
  }
  & p {
    text-align: center;
  }
  & a {
    color: #fff;
    background-color: var(--bg);
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`;
const BoxImg = styled(Box)`
  background-color: #fff;
  block-size: 120px;
  z-index: 1;
  transform-origin: bottom;

  &::before {
    content: "";
    position: absolute;
    inset-block-end: -70px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
    inline-size: 144px;
    block-size: 74px;
    background-color: #fff;
    border-end-start-radius: 80px;
    border-end-end-radius: 80px;
    z-index: 1;
  }
`;
const Img = styled.img`
  position: relative;
  inset-block-start: 50px;
  inline-size: 30%;
  z-index: 10;
`;
const BoxTxt = styled(Box)`
  block-size: 280px;
  background-color: var(--bg);
  border-block-start: 0.5rem solid #333;
  transform-origin: top;
  transition-delay: 0.5s;
  align-items: flex-end;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset-block-start: -8px;
    inset-inline-start: 50%;
    transform: translateX(-50%);
    inline-size: 160px;
    block-size: 80px;
    background-color: #333;
    border-end-start-radius: 80px;
    border-end-end-radius: 80px;
  }
  & h2 {
    color: #222;
    font-size: 1.25rem;
    letter-spacing: 0.15rem;
    font-weight: 500;
    text-transform: uppercase;
    background-color: #fff;
    padding: 5px 25px;
    box-shadow: 0 0 0 8px #333;
  }
`;
const Card = styled.div<{ $i: string }>`
  --bg: ${(props) => props.$i};
  position: relative;
  inline-size: 300px;
  block-size: 400px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* perspective: 500px; */

  &:hover ${BoxImg} {
    transform: translateY(-100%) rotateX(90deg);
  }
  &:hover ${BoxTxt} {
    transform: translateY(100%) rotateX(90deg);
  }
  &:hover ${Content} {
    opacity: 1;
    transition-delay: 0.5s;
  }
`;

export { BoxImg, BoxTxt, Img, Content, Card, Container };
