import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../actions/auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.user);
  const onChangeUsername = (e) => {
    let userName = e.target.value;
    setUserName(userName);
  };
  const onChangePassword = (e) => {
    let password = e.target.value;
    setPassword(password);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    users.map((u) => {
      if (u._username === userName && u._password === password) {
        dispatch(setUser(u));
        history.push("/home")
      }else{

      }
    });
  };

  return (
    <Card className={classes.root}>
      <form onSubmit={onSubmit}>
        <CardContent>
          <TextField
            value={userName}
            onChange={onChangeUsername}
            label="user"
            variant="outlined"
          />
          <TextField
            type="password"
            value={password}
            onChange={onChangePassword}
            label="password"
            variant="outlined"
          />
        </CardContent>

        <CardActions>
          <Button type="submit" size="large">
            Sig in
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default Login;
