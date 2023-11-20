import styled from "styled-components";

const MainGifs = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 5%;
`;

const SectionTitle = styled.h2`
  --minSize: 2rem;
  --mediumSize: calc(1rem + 1vw);
  --maxSize: 2.75rem;
  font-size: clamp(var(--minSize), var(--mediumSize), var(--maxSize));
`;

export { MainGifs, SectionTitle };
