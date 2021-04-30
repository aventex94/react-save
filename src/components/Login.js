import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../actions/user";
import { useHistory } from "react-router-dom";
import { temperature} from "../actions/temperature"
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 800,
  },
});

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loggin } = useSelector((state) => state.user);
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    let userName = e.target.value;
    setUserName(userName);
  };
  const onChangePassword = (e) => {
    let password = e.target.value;
    setPassword(password);
  };
  const onSubmit = (e) => {
    /* e.preventDefault();
    dispatch(setLogin(userName, password));
    if (loggin) {
      history.push("/product"); */
      e.preventDefault();
      dispatch(temperature()).then((response)=>{
        console.log(response);
      }).catch((err)=>{
        console.log(err);
      })
  }
  
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

export default Login
