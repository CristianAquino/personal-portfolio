import { Route } from "react-router-dom";
import { RoutesWithNotFound } from "@guards/index";
import { PUBLIC_ROUTE } from "@routes/index";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home/Home"));

export type ComponentsProps = {};

const Components = ({}: ComponentsProps) => {
  return (
    <RoutesWithNotFound
      message="Component not found"
      pageRedirect={PUBLIC_ROUTE.COMPONENTS}
    >
      <Route
        path={PUBLIC_ROUTE.HOME}
        element={
          <Suspense fallback={<h1>Load Home...</h1>}>
            <Home />
          </Suspense>
        }
      />
    </RoutesWithNotFound>
  );
};

export default Components;
