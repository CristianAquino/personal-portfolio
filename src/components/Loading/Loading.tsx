"use client";

import { Container, Logo } from "./styled-components";

export type LoadingProps = {
  // types...
};

const Loading = ({}: LoadingProps) => {
  return (
    <Container>
      <Logo src="/public/icons/logoP.svg" />
      <p>Loading...</p>
    </Container>
  );
};

export default Loading;
