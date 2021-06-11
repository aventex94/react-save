import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../actions/meet";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    margin: "20px",
  },
  media: {
    width: "100px",
    height: "140",
  },
});
const MeetView = ({ m, index,auth }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  var disabledConfig = false;
  var disabledSubscribe = false;
  const subscribed = m._users.filter((user) => user._id === auth.objectUser._id);
  if(subscribed.length > 0 )  disabledSubscribe=true;
  if(auth.objectUser._rol === "ROL_COMMON") disabledConfig = true;
  const onHandleClickConfig = (id) => {
    history.push(`/config/${id}`);
  };
  const onHandleSubscribe = (user,meetId) =>{
    dispatch(addUser(user,meetId));
    disabledSubscribe=true;
  }
  const classes = useStyles();
  return (
    <Card className={classes.card} key={index}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={m._descrip}
          height="240"
          image="https://revistasumma.com/wp-content/uploads/2015/04/cerveza.jpg"
          title={m._descrip}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {m._descrip}
          </Typography>
          <Typography variant="body2" color="primary">
            Date meet up: {m._date}
          </Typography>
          <br />
          <Typography variant="body2" color="primary">
            Temp: {m._temperature}°c
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> onHandleSubscribe(auth.objectUser,m._id)} disabled={disabledSubscribe} variant="contained" color="primary" size="large">
          subscribe
        </Button>
        <Button
          disabled={disabledConfig}
          onClick={() => onHandleClickConfig(m._id)}
          variant="contained"
          color="primary"
          size="large"
        >
          CONFIG
        </Button>
      </CardActions>
    </Card>
  );
};

export default MeetView;
