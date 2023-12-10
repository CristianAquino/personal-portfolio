import styled from "styled-components";

const List = styled.ul`
  color: #777;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Item = styled.li<{ $i: string }>`
  position: relative;
  list-style: none;
  inline-size: 60px;
  block-size: 60px;
  border-radius: 50px;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    inline-size: 200px;
    background-color: ${(props) => props.$i};
    color: #fff;
  }
  & svg {
    inline-size: 60px;
    block-size: 60px;
    scale: 0.5;
  }
`;
const Text = styled.span`
  position: absolute;
  inset-block-start: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  margin-inline-start: 1rem;
`;
export { Item, List, Text };
