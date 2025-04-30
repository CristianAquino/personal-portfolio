"use client";
import { Loading } from "@app/components";
import { RoutesWithNotFound } from "@app/guards";
import { PUBLIC_ROUTE } from "@app/routes";
import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { ImageProvider } from "../InputFile/contexts";
import { Layout } from "./components";

const Principal = lazy(() => import("./components/Principal/Principal"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const InputFile = lazy(() => import("../InputFile/InputFile"));

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
            <Suspense fallback={<Loading />}>
              <Principal />
            </Suspense>
          }
        />
        <Route
          path={PUBLIC_ROUTE.PROJECTS}
          element={
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path={PUBLIC_ROUTE.INPUT_FILE}
          element={
            <Suspense fallback={<Loading />}>
              <ImageProvider>
                <InputFile />
              </ImageProvider>
            </Suspense>
          }
        />
      </Route>
    </RoutesWithNotFound>
  );
};

export default Home;
