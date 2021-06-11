import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../actions/auth"
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import CustomizeAlert from "../../components/layout/CustomizeAlert"
/* import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert"; */
import Container from "@material-ui/core/Container";
import User from "../../model/User";
/* function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
} */
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.user);
  const [trigger, setTrigger] = useState(false);
  /*  const handleClick = () => {
    setOpen(true);
  }; */
  /* const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  }; */
  const onChangeUsername = (e) => {
    let userName = e.target.value;
    setUserName(userName);
  };

  const onChangePassword = (e) => {
    let password = e.target.value;
    setPassword(password);
  };
  const handleCloseAlert = useCallback(() => {
    setTrigger(false);
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    users.map((u) => {
      let user = new User(u._id, u._username, u._password, u._rol, true);
      if (user.verifiedCredentials(userName, password)) {
        dispatch(setUser(user));
        history.push("/");
      } else {
        setTrigger(true);
      }
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={onSubmit} className={classes.form}>
          <TextField
            onChange={onChangeUsername}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="email"
            autoFocus
          />
          <TextField
            onChange={onChangePassword}
            required
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <CustomizeAlert
            handleCloseAlert={handleCloseAlert}
            trigger={trigger}
            severity="error"
            message="Wrong credentials"
          />
        </form>
      </div>
    </Container>
  );
};

export default Login;
