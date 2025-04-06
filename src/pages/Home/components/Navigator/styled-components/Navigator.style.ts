import styled from "styled-components";

const Container = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (width<=320px) {
    inset-block-end: 1rem;
    flex-direction: row;
    block-size: initial;
    inset-inline-start: initial;
    inline-size: 288px;
  }
  @media (width>320px) {
    inset-block-end: 1.5rem;
    flex-direction: row;
    block-size: initial;
    inset-inline-start: initial;
    inline-size: 100vi;
  }
  @media (width>=992px) {
    inset-block-end: initial;
    flex-direction: column;
    block-size: 100vb;
    inset-inline-start: 2rem;
    inline-size: initial;
    min-width: 4rem;
  }
`;
const NavItem = styled.div`
  transition: inline-size 0.5s ease-in-out;
  overflow-x: hidden;
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
    inline-size: 2.5rem;
    block-size: 2.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;

    & a span:nth-child(1) {
      min-inline-size: 2.5rem;
      block-size: 2.5rem;
      line-height: 2.5rem;
    }
    & a span:nth-child(2) {
      display: none;
    }
  }
  @media (width>320px) {
    inline-size: 3rem;
    block-size: 3rem;
    border-radius: 0.75rem;
    font-size: 1.5rem;

    & a span:nth-child(1) {
      min-inline-size: 3rem;
      block-size: 3rem;
      line-height: 3rem;
    }
    & a span:nth-child(2) {
      display: none;
    }
  }

  @media (width>=992px) {
    inline-size: 4rem;
    block-size: 4rem;
    border-radius: 1rem;
    font-size: 2rem;

    & a span:nth-child(1) {
      min-inline-size: 4rem;
      block-size: 4rem;
      line-height: 4rem;
    }
    & a span:nth-child(2) {
      display: block;
      block-size: 4rem;
      line-height: 4rem;
    }
  }

  @media (hover: hover) {
    &:hover {
      inline-size: 15rem;
    }
  }
`;
export { Container, NavItem };
