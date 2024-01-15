import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  min-block-size: 100vh;
  block-size: 100vh;
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.h2`
  --min: 1rem;
  --med: calc(0.8rem + 8vw);
  --max: 4rem;
  font-weight: bold;
  font-size: clamp(var(--min), var(--med), var(--max));
  margin-block-end: 1rem;
`;
const Content = styled.div`
  display: flex;
  gap: 1rem;
  inline-size: 100%;
  block-size: 50%;
`;
const BoxImage = styled.picture`
  inline-size: 40%;
  block-size: 100%;
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
  gap: 1rem;
`;
const InfoName = styled.h3`
  --min: 1rem;
  --med: calc(0.8rem + 6vw);
  --max: 3rem;
  font-weight: 400;
  font-size: clamp(var(--min), var(--med), var(--max));
  text-transform: capitalize;
  max-inline-size: 66ch;
`;
const InfoDescription = styled.p`
  --min: 0.5rem;
  --med: calc(0.4rem + 2vw);
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
  max-inline-size: 4rem;
  /* max-inline-size: 10%; */
  & img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: contain;
  }
`;
const LinkMore = styled(Link)`
  --min: 0.5rem;
  --med: calc(0.4rem + 2vw);
  --max: 1.5rem;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: clamp(var(--min), var(--med), var(--max));
  letter-spacing: 0.2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--primary);
  color: var(--darkColor);
`;
export {
  Container,
  Content,
  ProjectInfo,
  ProjectImage,
  Title,
  InfoDescription,
  InfoList,
  InfoName,
  ItemInfoList,
  BoxImage,
  LinkMore,
};
