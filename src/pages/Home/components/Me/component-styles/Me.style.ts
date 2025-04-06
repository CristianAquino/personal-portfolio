import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  inline-size: 100%;
  display: grid;
  gap: 1rem;

  @media (width<=320px) {
    block-size: initial;
    padding-block: 1rem;
    grid-template-areas:
      "datos"
      "links"
      "imagen";
  }
  @media (width>320px) {
    padding-block: 1rem;
    grid-template-areas:
      "datos imagen"
      "links links";
  }
  @media (width>576px) {
    padding-block: 5vb;
    grid-template-areas:
      "datos imagen"
      "links imagen";
  }
  @media (width>=992px) {
    block-size: 100vb;
    align-items: center;
    padding-block: 5vb;
    gap: 0;
    overflow: hidden;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "datos imagen"
      "links imagen";
  }
`;
const ContentDatos = styled.div`
  grid-area: datos;
`;
const ContentLinks = styled.div`
  grid-area: links;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ContentImagen = styled.div`
  grid-area: imagen;
  block-size: 100%;
  padding: 0 4vmin;

  & img {
    inline-size: 100%;
  }

  @media (width<=320px) {
    inline-size: 100%;
    padding: initial;
  }
  @media (width>320px) {
    & img {
      block-size: 100%;
    }
  }
  @media (width>576px) {
    padding: initial;
  }
  @media (width>=992px) {
    padding: 0 4vmin;
    inline-size: 50vi;
    & img {
      block-size: auto;
    }
  }
`;
const Hello = styled.span`
  --min: 1rem;
  --med: calc(0.4rem + 2vi);
  --max: 2rem;
  font-size: clamp(var(--min), var(--med), var(--max));
`;
const Name = styled.h2`
  --min: 2rem;
  --med: calc(0.8rem + 8vi);
  --max: 4rem;
  font-weight: bold;
  font-size: clamp(var(--min), var(--med), var(--max));
`;
const Description = styled.p`
  --min: 1rem;
  --med: calc(0.4rem + 2vi);
  --max: 1.5rem;
  font-weight: 200;
  font-size: clamp(var(--min), var(--med), var(--max));
  max-inline-size: 66ch;
  padding: 1rem 0;
  @media (width<=320px) {
    padding: initial;
    padding-block-start: 1rem;
  }
`;
const ContactList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const ContactItem = styled.li<{ $color?: string }>`
  --min: 1rem;
  --med: calc(0.4rem + 2vi);
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
  @media (width>576px) {
    inline-size: 100%;
  }
  @media (width>=992px) {
    inline-size: initial;
  }
  & svg {
    --min: 1.25rem;
    --med: calc(0.4rem + 2vi);
    --max: 2rem;
    font-size: clamp(var(--min), var(--med), var(--max));
  }
  &:hover {
    cursor: pointer;
  }
`;
const Download = styled(Link)`
  --min: 1rem;
  --med: calc(0.4rem + 2vi);
  --max: 1.5rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  inline-size: 100%;
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
  Hello,
  ContentDatos,
  ContentImagen,
  ContentLinks,
};
