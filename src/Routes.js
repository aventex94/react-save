import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/common/Login";
import Home from "./components/layout/Home";
import Main from "./components/layout/Main";
import Meet from "./components/Meet/Meet";
import AddMeet from "./components/Meet/AddMeet";
import PrivateRoute from "./components/common/PrivateRoute";
import AdminRoute from "./components/common/AdminRoute";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Main>
          <AdminRoute exact path="/config/:id" component={Meet}/>
          <AdminRoute exact path="/meet/add" component={AddMeet}/> 
          <PrivateRoute exact path="/" component={Home} />
        </Main>
      </Switch>
    </Router>
  );
};

export default Routes;
