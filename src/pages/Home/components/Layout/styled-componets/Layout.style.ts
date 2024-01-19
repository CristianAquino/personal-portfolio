import styled from "styled-components";

const Container = styled.div`
  --min: 1rem;
  --med: calc(0.4rem + 2vw);
  --max: 2rem;
  min-block-size: 100dvh;
  max-inline-size: 100vi;
  min-inline-size: 20rem;
  padding-inline: clamp(var(--min), var(--med), var(--max));
  position: relative;
  @media (width>=992px) {
    padding-inline-start: 8rem;
  }
`;
export { Container };
