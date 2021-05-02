import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./Nav";
import { Directions } from "@material-ui/icons";

const useStyles = makeStyles({
  mainPage: {},
  mainLayout: {
    display: "flex",
  },
});

const Main = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <main className={classes.mainPage}>
      <Nav />
       
      <div className={classes.mainLayout}>{children}</div>
    </main>
  );
};

export default Main;
