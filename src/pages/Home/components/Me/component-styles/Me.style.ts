import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  block-size: 100vh;
  inline-size: 100%;
  /* padding-block-start: clamp(48px, 8vw, 104px); */
  display: flex;
  align-items: center;
  gap: 1rem;
  & > div {
    inline-size: 100%;
  }
`;
const Right = styled.section`
  inline-size: 50%;
  block-size: 100%;
`;
const Left = styled.section`
  inline-size: 50%;
  block-size: 100%;
`;
const Name = styled.h2`
  --min: 1rem;
  --med: calc(0.8rem + 8vw);
  --max: 4rem;
  font-weight: bold;
  font-size: clamp(var(--min), var(--med), var(--max));
`;
const Description = styled.p`
  --min: 0.5rem;
  --med: calc(0.4rem + 2vw);
  --max: 1.5rem;
  font-weight: 200;
  font-size: clamp(var(--min), var(--med), var(--max));
  max-inline-size: 66ch;
  padding: 1rem 0;
`;
const ContactList = styled.ul`
  list-style: none;
  padding: 1rem 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const ContactItem = styled.li<{ $color?: string }>`
  --min: 0.5rem;
  --med: calc(0.4rem + 2vw);
  --max: 1rem;
  --bg: ${(props) => props.$color};
  block-size: 8vmin;
  background-color: var(--bg, #fff);
  border-radius: 96px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: clamp(var(--min), var(--med), var(--max));
  padding: 4vmin;
  & svg {
    --min: 1rem;
    --med: calc(0.4rem + 2vw);
    --max: 2rem;
    font-size: clamp(var(--min), var(--med), var(--max));
  }
  &:hover {
    cursor: pointer;
  }
`;
const Download = styled(Link)`
  --min: 0.5rem;
  --med: calc(0.4rem + 2vw);
  --max: 1.25rem;
  display: inline-block;
  margin-block-start: 1rem;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(var(--min), var(--med), var(--max));
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--primary);
  color: var(--darkColor);
`;
export {
  Container,
  ContactList,
  ContactItem,
  Download,
  Name,
  Description,
  Left,
  Right,
};
