import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./helpers";
import { PUBLIC_ROUTE } from "./routes";
import "./App.css";
import { Components, Proyects } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound pageRedirect={PUBLIC_ROUTE.HOME}>
        <Route path={PUBLIC_ROUTE.HOME} element={<div>Home</div>} />
        {/* anadimos el * para que cualquier ruta acceda mediante proyects/[page_name] */}
        <Route path={`${PUBLIC_ROUTE.PROYECTS}/*`} element={<Proyects />} />
        <Route path={`${PUBLIC_ROUTE.COMPONENTS}/*`} element={<Components />} />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}

export default App;
