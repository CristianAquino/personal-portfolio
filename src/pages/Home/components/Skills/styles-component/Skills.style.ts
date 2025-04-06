import styled from "styled-components";
const Container = styled.section`
  min-block-size: 100vb;
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
`;
const Title = styled.h2`
  --min: 1rem;
  --med: calc(0.8rem + 8vi);
  --max: 4rem;
  font-weight: bold;
  font-size: clamp(var(--min), var(--med), var(--max));
`;
const Content = styled.div`
  display: flex;
  gap: 1rem;
  inline-size: 100%;
  block-size: 50vmin;
`;
const Categories = styled.h3`
  --min: 1.5rem;
  --med: calc(0.8rem + 2vi);
  --max: 3rem;
  font-size: clamp(var(--min), var(--med), var(--max));
  font-weight: 500;
`;
const BoxImage = styled.picture`
  inline-size: 12vmin;
  block-size: 12vmin;
`;
const SkillImage = styled.img`
  inline-size: 100%;
  block-size: 100%;
  object-fit: contain;
  object-position: center;
`;
export { BoxImage, Categories, Container, Content, SkillImage, Title };
