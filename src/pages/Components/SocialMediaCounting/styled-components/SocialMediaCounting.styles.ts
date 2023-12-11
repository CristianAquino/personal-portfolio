import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  inline-size: 96vmin;
  font-family: "Montserrat", sans-serif;
`;
const Item = styled.li<{ $i: string }>`
  list-style: none;
  inline-size: 20%;
  text-align: center;
  cursor: pointer;

  & * {
    color: ${(props) => props.$i};
  }
  & svg {
    font-size: 4rem;
  }
`;
const Counting = styled.div`
  font-size: 2rem;
  font-weight: 600;
  & span {
    margin-inline-start: 0.5rem;
  }
`;
const Text = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 0.2rem;
`;
export { Counting, Item, List, Text };
