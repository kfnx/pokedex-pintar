// @flow
import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SpinningPokeball from "../components/SpinningPokeball";
import Error from "../components/Error";

const Home = React.lazy(() => import("../pages/Home"));
const Detail = React.lazy(() => import("../pages/Detail"));

export default function Router(): React.Node {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<SpinningPokeball fullscreen />}>
        <Switch>
          <Route exact path={["/", "/filter/:filter"]} component={Home} />
          <Route exact path="/detail/:name" component={Detail} />
          <Route component={Error} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}
