import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
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
  const history = useHistory();
  const auth = useSelector((state) => state.auth)
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const onHandleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const createMeet = (e) =>{
    history.push("/login");
  };
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={onHandleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={createMeet}>Add Meet</MenuItem>
              
              <MenuItem >Logout</MenuItem>
            </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MEET UP
          </Typography>
          {auth.objectUser._username}
        </Toolbar>
      </AppBar>
    </div>
  );
}
