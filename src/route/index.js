// @flow
import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import SpinningPokeball from "../components/SpinningPokeball";

export default function Router(): React.Node {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<SpinningPokeball />}>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path="/detail/:name" component={Detail} />
          <Route component={() => <h1>not found</h1>} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}
