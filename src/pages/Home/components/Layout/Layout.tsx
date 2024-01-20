"use client";
import { Outlet } from "react-router-dom";
import { Container } from "./styled-componets";
import { Navigator } from "..";
import { Helmet } from "react-helmet";

export type LayoutProps = {
  // types...
};

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <Container>
      {/* SEO */}
      <Helmet>
        <title>Home | Portfolio</title>
        <meta
          name="description"
          content="main page of the protfolio project created by CRdev"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/portfolioIcon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/portfolioIcon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/portfolioIcon/favicon-16x16.png"
        />
        <link rel="manifest" href="/portfolioIcon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/portfolioIcon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Navigator />
      <Outlet />
    </Container>
  );
};

export default Layout;
