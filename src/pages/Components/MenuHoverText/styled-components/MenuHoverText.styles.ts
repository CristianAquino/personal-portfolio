import styled from "styled-components";

const List = styled.ul`
  position: relative;
  display: flex;
  gap: 1.5rem;
`;
const Text = styled.span`
  color: #fff;
  text-transform: capitalize;
  position: absolute;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  scale: 0;
  transition: 0.5s;
  transition-delay: 0s;
`;
const Item = styled.li<{ $i?: string; $j?: string }>`
  position: relative;
  list-style: none;
  inline-size: 60px;
  block-size: 60px;
  background-color: #fff;
  border-radius: 3.75rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 25px rgb(0 0 0 / 0.1);
  transition: 0.5s;

  & svg {
    color: #777;
    font-size: 1.75rem;
    transition: 0.5s;
    transition-delay: 0.25s;
    position: absolute;
  }

  &:hover {
    inline-size: 180px;
    box-shadow: 0 10px 25px rgb(0 0 0 / 0);
  }
  &:hover svg {
    scale: 0;
    color: #fff;
    transition-delay: 0s;
  }
  &:hover ${Text} {
    scale: 1;
    transition-delay: 0.25s;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover::after {
    opacity: 0.5;
  }
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 3.75rem;
    background: linear-gradient(
      45deg,
      ${(props) => props.$i},
      ${(props) => props.$j}
    );
    opacity: 0;
    transition: 0.5s;
  }
  &::after {
    content: "";
    position: absolute;
    inset-block-start: 10px;
    inline-size: 100%;
    block-size: 100%;
    border-radius: 3.75rem;
    background: linear-gradient(
      45deg,
      ${(props) => props.$i},
      ${(props) => props.$j}
    );
    transition: 0.5s;
    filter: blur(15px);
    z-index: -1;
    opacity: 0;
  }
`;
export { Item, List, Text };
