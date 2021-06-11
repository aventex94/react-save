import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../actions/auth";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  var disabledAdd = false;
  if(auth.objectUser._rol === "ROL_COMMON") disabledAdd=true;
  const onHandleClickHome = () => {
    history.push("/");
  };
  const onHandleClickAddMeet = () => {
    history.push("/meet/add");
  };
  const onHandleClickLogOut = () => {
    dispatch(logOut(false));
    history.push("/login");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button onClick={onHandleClickHome}>
              <HomeIcon />
            </Button>
            Home
            <Button disabled={disabledAdd} onClick={onHandleClickAddMeet}>
              <AddIcon />
            </Button>
            Add Meet
          </Typography>
          <Typography variant="h6">
            User:
            {auth.objectUser._username}
            <Button onClick={onHandleClickLogOut}>
              <ExitToAppIcon />
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
