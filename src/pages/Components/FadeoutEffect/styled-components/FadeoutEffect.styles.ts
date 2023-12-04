import styled from "styled-components";

const CardData = styled.div`
  position: relative;
  block-size: 100%;
  inline-size: 100%;
  padding: 1rem;
  overflow: auto;
  transition: 0.3s;
  transition-delay: 0.2s;
  opacity: 0;
  z-index: 0;

  &::-webkit-scrollbar {
    inline-size: 1vmin;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00aaff;
  }
`;

const CardDataTitle = styled.h1`
  --fmin: 1rem;
  --fmed: calc(3vmin + 0.75rem);
  --fmax: 2rem;
  text-align: center;
  font-size: clamp(var(--fmin), var(--fmed), var(--fmax));
  margin-block-end: 1rem;
`;

const CardDataDescription = styled.p`
  --fmin: 0.75rem;
  --fmed: calc(2vmin + 0.25rem);
  --fmax: 1.5rem;
  font-size: clamp(var(--fmin), var(--fmed), var(--fmax));
  text-align: justify;
`;

const Card = styled.div`
  --bg: #222;
  position: relative;
  inline-size: 50vmin;
  block-size: 50vmin;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  border-radius: 1vmin;

  &::before {
    content: "";
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: -70vmin;
    inline-size: 120vmin;
    block-size: 100%;
    background: linear-gradient(
      to left,
      transparent,
      transparent 50vmin,
      var(--bg) 70vmin,
      var(--bg) 100vmin
    );
    z-index: 1;
    transition: 1s;
    border-radius: 1vmin;
  }

  &:hover::before {
    inset-inline-start: 0px;
  }

  & img {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:hover ${CardData} {
    z-index: 10;
    opacity: 1;
  }
`;

export { Card, CardData, CardDataTitle, CardDataDescription };
