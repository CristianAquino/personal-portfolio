"use client";
import { RoutesWithNotFound } from "@app/guards";
import { PUBLIC_ROUTE } from "@app/routes";
import { Route } from "react-router-dom";
import { Layout } from "./components";
import { Suspense, lazy } from "react";

const Principal = lazy(() => import("./components/Principal/Principal"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

export type HomeProps = {
  // types...
};

const Home = ({}: HomeProps) => {
  return (
    <RoutesWithNotFound
      message="Home Page not found"
      pageRedirect={PUBLIC_ROUTE.HOME}
    >
      <Route path={PUBLIC_ROUTE.HOME} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<h1>Load Principal</h1>}>
              <Principal />
            </Suspense>
          }
        />
        <Route
          path={PUBLIC_ROUTE.PROJECTS}
          element={
            <Suspense fallback={<h1>Load Projets</h1>}>
              <Projects />
            </Suspense>
          }
        />
      </Route>
    </RoutesWithNotFound>
  );
};

export default Home;
