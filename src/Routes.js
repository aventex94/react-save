import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./components/Product";
import Nav from "./components/layout/Nav";
import Login from "./components/Login";
const Routes = () => {

  


  return (

    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/product">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
