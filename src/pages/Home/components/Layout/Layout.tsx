"use client";
import { Outlet } from "react-router-dom";
import { Container } from "./styled-componets";
import { Navigator } from "..";

export type LayoutProps = {
  // types...
};

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <Container>
      <Navigator />
      <Outlet />
    </Container>
  );
};

export default Layout;
