import { RoutesWithNotFound } from "@app/guards";
import { PROYECTS_ROUTE, PUBLIC_ROUTE } from "@app/routes";
import { Route } from "react-router-dom";
import { Home, SearchOfResults } from "./components";

export type GifsProps = {};

const Gifs = ({}: GifsProps) => {
  return (
    <RoutesWithNotFound
      message="Page not found"
      pageRedirect={PUBLIC_ROUTE.PROYECTS + PROYECTS_ROUTE.GIFS}
    >
      <Route path={`${PUBLIC_ROUTE.HOME}`} element={<Home />} />
      <Route
        path={`${PUBLIC_ROUTE.HOME}/:keyword`}
        element={<SearchOfResults />}
      />
    </RoutesWithNotFound>
  );
};

export default Gifs;
