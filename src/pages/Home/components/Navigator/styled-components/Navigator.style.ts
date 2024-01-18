import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  inset-inline-start: 2rem;
  block-size: 100vb;
  min-width: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  @media (width<=320px) {
    inset-block-end: 1rem;
    flex-direction: row;
    block-size: initial;
    inset-inline-start: initial;
    inline-size: 288px;
  }
`;
const NavItem = styled.div`
  inline-size: 4rem;
  block-size: 4rem;
  transition: inline-size 0.5s ease-in-out;
  border-radius: 1rem;
  overflow-x: hidden;
  font-size: 2rem;
  background-color: var(--primary);
  color: #fff;

  & a {
    display: flex;
    inline-size: 100%;
    text-decoration: none;
    color: #fff;
  }
  & a span:nth-child(1) {
    display: block;
    min-inline-size: 4rem;
    block-size: 4rem;
    line-height: 4rem;
    text-align: center;
  }
  & a span:nth-child(2) {
    display: block;
    block-size: 4rem;
    line-height: 4rem;
    white-space: nowrap;
  }

  @media (width<=320px) {
    inline-size: 2rem;
    block-size: 2rem;
    border-radius: 0.5rem;
    font-size: 1rem;

    & a span:nth-child(1) {
      min-inline-size: 2rem;
      block-size: 2rem;
      line-height: 2rem;
    }
    & a span:nth-child(2) {
      display: none;
    }
  }

  @media (hover: hover) {
    &:hover {
      inline-size: 15rem;
    }
  }
`;
export { Container, NavItem };
