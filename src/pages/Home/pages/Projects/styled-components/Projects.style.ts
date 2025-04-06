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
  --min: 2rem;
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
  @media (width<=320px) {
    flex-direction: column;
    block-size: initial;
  }
`;
const BoxImage = styled.picture`
  inline-size: 40%;
  block-size: 100%;
  @media (width<=320px) {
    inline-size: 100%;
  }
`;
const ProjectImage = styled.img`
  inline-size: 100%;
  block-size: 100%;
  object-fit: contain;
  object-position: center;
`;
const ProjectInfo = styled.div`
  inline-size: 60%;
  block-size: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  @media (width<=320px) {
    inline-size: 100%;
  }
`;
const InfoName = styled.h3`
  --min: 1.5rem;
  --med: calc(0.8rem + 2vi);
  --max: 3rem;
  font-weight: 400;
  font-size: clamp(var(--min), var(--med), var(--max));
  text-transform: capitalize;
  max-inline-size: 66ch;
`;
const InfoDescription = styled.p`
  --min: 1rem;
  --med: calc(0.4rem + 2vi);
  --max: 1.5rem;
  font-weight: 200;
  font-size: clamp(var(--min), var(--med), var(--max));
  max-inline-size: 66ch;
  /* max two lines */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-inline-size: 66ch;
`;
const ItemInfoList = styled.li`
  inline-size: 10vmin;
  & img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: contain;
  }
`;
export {
  BoxImage,
  Container,
  Content,
  InfoDescription,
  InfoList,
  InfoName,
  ItemInfoList,
  ProjectImage,
  ProjectInfo,
  Title,
};
