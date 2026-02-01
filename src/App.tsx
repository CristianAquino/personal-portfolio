import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "@guards/index";
import { PUBLIC_ROUTE } from "@routes/index";
import { lazy } from "react";
// import "@app/App.css";
import { Toaster } from "react-hot-toast";

const Portfolio = lazy(() => import("@pages/Portfolio/Portfolio"));

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <RoutesWithNotFound pageRedirect={PUBLIC_ROUTE.HOME}>
        <Route path={"*"} element={<Portfolio />} />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}

export default App;
