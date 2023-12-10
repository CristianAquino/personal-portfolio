import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  block-size: 96vmin;
  inline-size: 88vmin;
  gap: 3rem;
  flex-wrap: wrap;
`;
const Button = styled.a`
  position: relative;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  border: 2px solid transparent;
  transition: 0.5s;

  &:hover {
    border: 2px solid #fff;
  }
  &::before {
    content: "";
    position: absolute;
    inset: 0 0.5rem;
    border-inline: 2px solid #fff;
    transition: 1s;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0.5rem 0;
    border-block: 2px solid #fff;
    transition: 1s;
  }
  /* affect first child only */
  &:nth-child(1):hover::before {
    inset: 1rem 0.5rem;
  }
  &:nth-child(1):hover::after {
    inset: 0.5rem 1rem;
  }
  /* affect second child only */
  &:nth-child(2):hover::before {
    inset: 0 0.5rem;
    transform: rotateY(180deg);
  }
  &:nth-child(2):hover::after {
    inset: 0.5rem 0;
    transform: rotateX(180deg);
  }
  /* affect third child only */
  &:nth-child(3):hover::before {
    inset: 0 -0.75rem;
    transform: skewY(15deg);
  }
  &:nth-child(3):hover::after {
    inset: -0.75rem 0;
    transform: skewX(15deg);
  }
  &:nth-child(4):hover,
  &:nth-child(5):hover,
  &:nth-child(6):hover {
    border-color: transparent;
  }
  /* affect fourth child only */
  &:nth-child(4):hover::before {
    inset: 0 1.75rem;
    transform: skew(25deg);
  }
  &:nth-child(4):hover::after {
    inset: 0.5rem 0;
    transform: skew(-25deg);
  }
  /* affect fifth child only */
  &:nth-child(5):hover::before,
  &:nth-child(5):hover::after {
    inset: 0;
  }
  /* affect sixth child only */
  &:nth-child(6):hover::before {
    inset: 0;
    transform: rotate(-10deg);
  }
  &:nth-child(6):hover::after {
    inset: 0 -0.25rem;
    transform: rotate(5deg);
  }
`;
export { Button, Container };
