import styled, { keyframes } from "styled-components";

const Card = styled.div`
  inline-size: 500px;
  block-size: 200px;
  border: 1px solid var(--darkColor);
  border-radius: 0.5rem;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const Left = styled.div`
  inline-size: 40%;
  block-size: 100%;
`;
const Right = styled.div`
  inline-size: 60%;
  block-size: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const load = keyframes`
100%{background-position:-100% 0}
`;
const Box = styled.div`
  background: linear-gradient(
    120deg,
    #d9d9d9 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #d9d9d9 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${load} 1.25s infinite;
`;
const Thumbnail = styled(Box)`
  inline-size: 100%;
  block-size: 100%;
  border-radius: 50%;
`;
const Title = styled(Box)`
  inline-size: 60%;
  block-size: 20%;
  border-radius: 0.5rem;
`;
const Content = styled(Box)`
  inline-size: 100%;
  block-size: 80%;
  border-radius: 0.5rem;
`;
export { Card, Content, Thumbnail, Title, Left, Right };
