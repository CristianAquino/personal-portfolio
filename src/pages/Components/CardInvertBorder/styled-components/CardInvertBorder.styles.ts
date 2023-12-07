import styled from "styled-components";

const Card = styled.div`
  position: relative;
  inline-size: 320px;
  block-size: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
`;
const BoxImg = styled.div<{ $url: string }>`
  position: relative;
  inline-size: 100%;
  block-size: 240px;
  border-radius: 15px;
  background-image: url(${(props) => props.$url});
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    inline-size: 20px;
    block-size: 20px;
    inset-block-end: 0;
    inset-inline-start: 50%;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #222;
  }
  &::after {
    content: "";
    position: absolute;
    inline-size: 20px;
    block-size: 20px;
    inset-block-end: 70px;
    inset-inline-start: 0;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #222;
  }
`;
const Content = styled.div`
  position: relative;
  inline-size: 100%;
  block-size: 150px;
  background-color: blue;
  border-radius: 15px;
  border-start-start-radius: 0;
  padding: 0 35px;
`;
const Price = styled.div`
  position: absolute;
  inline-size: 50%;
  block-size: 80px;
  inset-block-start: -80px;
  inset-inline-start: 0;
  background-color: blue;
  border-block-start: 10px solid #222;
  border-inline-end: 10px solid #222;
  border-start-end-radius: 25px;

  &::before {
    content: "";
    position: absolute;
    inline-size: 25px;
    block-size: 25px;
    border-radius: 50%;
    box-shadow: -10px -10px 0 #222;
  }
  &::after {
    content: "";
    position: absolute;
    inline-size: 25px;
    block-size: 25px;
    inset-block-end: 0;
    inset-inline-end: -25px;
    border-radius: 50%;
    box-shadow: -10px 10px 0 blue;
  }

  & a {
    position: relative;
    background-color: #fff;
    padding: 10px 20px;
    margin: 15px;
    display: block;
    border-radius: 0.5rem;
    color: #333;
    font-weight: 500;
    text-decoration: none;
  }
`;
export { BoxImg, Card, Content, Price };
