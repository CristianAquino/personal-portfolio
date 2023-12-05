import styled from "styled-components";

const Card = styled.div`
  position: relative;
  inline-size: 320px;
  block-size: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Montserrat", sans-serif;
`;

const Box1 = styled.div`
  position: relative;
  inline-size: 110%;
  block-size: 200px;
  background-color: #f00;
  border-radius: 15px;

  & video {
    inline-size: 100%;
    block-size: 100%;
    inset: 0;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    inset-block-start: 107px;
    inset-inline-start: -1px;
    inline-size: 20px;
    block-size: 20px;
    background-color: transparent;
    z-index: 10;
    border-end-start-radius: 20px;
    box-shadow: -6px 6px #242424;
  }
  &::after {
    content: "";
    position: absolute;
    inset-inline-start: 104px;
    inset-block-end: -1px;
    inline-size: 20px;
    block-size: 20px;
    background-color: transparent;
    z-index: 10;
    border-end-start-radius: 20px;
    box-shadow: -6px 6px #242424;
  }
`;

const Box2 = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: #fff;
  block-size: 220px;
  inline-size: 100%;

  &::before {
    content: "";
    position: absolute;
    inset-block-end: 107px;
    inset-inline-start: -1px;
    inline-size: 20px;
    block-size: 20px;
    background-color: transparent;
    z-index: 10;
    border-start-start-radius: 20px;
    box-shadow: -6px -6px #242424;
  }
  &::after {
    content: "";
    position: absolute;
    inset-block-start: -1px;
    inset-inline-start: 109px;
    inline-size: 20px;
    block-size: 20px;
    background-color: transparent;
    z-index: 10;
    border-start-start-radius: 20px;
    box-shadow: -6px -6px #242424;
  }
`;

const Cicle = styled.div`
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: -70px;
  translate: 0 -50%;
  inline-size: 180px;
  block-size: 180px;
  border-radius: 50%;
  border: 10px solid #242424;
  overflow: hidden;

  & img {
    inline-size: 100%;
    block-size: 100%;
    inset: 0;
    object-fit: cover;
  }
`;

const Data = styled.div`
  position: absolute;
  inset: 0;
  padding: 30px 10px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const Container = styled.ul`
  position: relative;
  inset-block-start: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  inline-size: 100%;
  padding: 0 10px;
  justify-content: space-evenly;
`;
const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 10px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #999;

  &:not(:last-child) {
    border-inline-end: 1px solid #ccc;
  }

  & span {
    font-size: 1.65rem;
    color: #333;
  }
`;
const Name = styled.h2`
  padding-inline-start: 120px;
  text-transform: uppercase;
  font-size: 1.15rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  line-height: 1.1;
  color: #333;

  & span {
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    color: #e91e63;
    text-transform: initial;
  }
`;
const Button = styled.button`
  position: relative;
  padding: 8px 30px;
  inset-block-start: 25px;
  border: none;
  outline: none;
  background-color: #03a9f4;
  border-radius: 30px;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  border: 5px solid #222;
  box-shadow: 0 0 0 10px #fff;
  transition: 0.5s;

  &:hover {
    letter-spacing: 0.5rem;
    background-color: #ff3d7f;
  }
  &::before {
    content: "";
    inset-block-start: 19px;
    inset-inline-start: -31px;
    position: absolute;
    inline-size: 20px;
    block-size: 20px;
    border-start-end-radius: 20px;
    box-shadow: 5px -7px #fff;
  }
  &::after {
    content: "";
    inset-block-start: 19px;
    inset-inline-end: -31px;
    position: absolute;
    inline-size: 20px;
    block-size: 20px;
    border-start-start-radius: 20px;
    box-shadow: -5px -7px #fff;
  }
`;
export { Card, Box1, Box2, Cicle, Data, Name, Container, Item, Button };
