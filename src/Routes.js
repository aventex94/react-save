import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import Login from "./components/Login";
import Home from "./components/layout/Home";
import Main from "./components/layout/Main";
import Meet from "./components/Meet";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Main>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/config/:id">
            <Meet />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Main>
      </Switch>
    </Router>
  );
};

export default Routes;
