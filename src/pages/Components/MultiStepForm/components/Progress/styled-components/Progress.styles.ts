import { styled } from "styled-components";

const Container = styled.section`
  inline-size: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
`;
const IProgress = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  &.active span {
    background-color: var(--primary);
  }
  & span {
    inline-size: 2rem;
    block-size: 2rem;
    border-radius: 50%;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  & h6 {
    color: #ccc;
  }
  &.active h6 {
    color: var(--primary);
  }
`;
export { Container, IProgress };
