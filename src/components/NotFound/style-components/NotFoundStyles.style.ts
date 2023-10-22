import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: clamp(5rem, 1rem + 10vw, 200px);
  gap: 0.1em;
`;

const Message = styled.p`
  font-size: 0.2em;
  font-weight: bold;
  border: 1px solid var(--blue);
  padding: 0 16px;
  border-radius: 0.2em;
  color: var(--blue);
`;

const LinkRedirect = styled(Link)`
  font-size: 0.1em;
  font-weight: bold;
  color: #fff;
`;
export { Container, Message, LinkRedirect };
