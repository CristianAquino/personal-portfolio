import styled from "styled-components";

const Container = styled.div`
  --min: 1rem;
  --med: calc(0.4rem + 2vw);
  --max: 2rem;
  min-block-size: 100dvh;
  max-inline-size: 100vw;
  min-inline-size: 20rem;
  padding-inline-end: clamp(var(--min), var(--med), var(--max));
  /* padding-inline-start: calc(2rem + 64px); */
  padding-inline-start: 8rem;
  position: relative;
`;
export { Container };
