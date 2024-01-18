import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  block-size: 100vh;
  inline-size: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  & > div {
    inline-size: 100%;
  }

  @media (width<=320px) {
    align-items: flex-start;
    block-size: initial;
    padding-block: 1rem;
    & > div {
      flex-direction: column;
    }
  }
`;
const Content = styled.div`
  display: flex;
  block-size: 64vh;
  gap: 1rem;
  @media (width<=320px) {
    block-size: initial;
  }
`;

// analizar left y right para refactorizar
const Left = styled.section`
  inline-size: 50%;
  block-size: 100%;

  @media (width<=320px) {
    inline-size: 100%;
  }
`;
const Right = styled.section`
  inline-size: 50%;
  block-size: 100%;
  padding: 0 8vmin;

  @media (width<=320px) {
    inline-size: 100%;
    padding: initial;
  }
`;
const Hello = styled.span`
  --min: 1rem;
  --med: calc(0.4rem + 2vw);
  --max: 2rem;
  font-size: clamp(var(--min), var(--med), var(--max));
`;
const Name = styled.h2`
  --min: 2rem;
  --med: calc(0.8rem + 8vw);
  --max: 4rem;
  font-weight: bold;
  font-size: clamp(var(--min), var(--med), var(--max));
`;
const Description = styled.p`
  --min: 1rem;
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
  --min: 1rem;
  --med: calc(0.4rem + 2vw);
  --max: 1.5rem;
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

  @media (width<=320px) {
    padding: 6vmin;
  }
  & svg {
    --min: 1.25rem;
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
  --max: 1.5rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  inline-size: 100%;
  font-weight: 500;
  font-size: clamp(var(--min), var(--med), var(--max));
  letter-spacing: 0.2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--primary);
  color: var(--darkColor);
`;
export {
  Container,
  Content,
  ContactList,
  ContactItem,
  Download,
  Name,
  Description,
  Left,
  Right,
  Hello,
};
