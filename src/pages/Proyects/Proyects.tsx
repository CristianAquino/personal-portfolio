import { Route } from "react-router-dom";
import { RoutesWithNotFound } from "@guards/index";
import { PROYECTS_ROUTE, PUBLIC_ROUTE } from "@routes/index";
import { Ecommerce } from "./pages/Ecommerce";
import { Gifs } from "./pages/Gifs";

export type ProyectsProps = {};

const Proyects = ({}: ProyectsProps) => {
  return (
    <RoutesWithNotFound
      message="Proyect not found"
      pageRedirect={PUBLIC_ROUTE.PROYECTS}
    >
      <Route path={PUBLIC_ROUTE.HOME} element={<div>Proyects</div>} />
      <Route path={`${PROYECTS_ROUTE.ECOMMERCE}/*`} element={<Ecommerce />} />
      <Route path={`${PROYECTS_ROUTE.GIFS}/*`} element={<Gifs />} />
    </RoutesWithNotFound>
  );
};

export default Proyects;
