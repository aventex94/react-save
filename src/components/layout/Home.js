import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { temperature } from "../../actions/temperature";
import Meet from "../../model/meet";
import { addMeet } from "../../actions/meet";

import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card:{
    alignSelf:"center",
    
  }
});

const Home = () => {
  const classes = useStyles();
 const history = useHistory();
  const dispatch = useDispatch();
  const { meets } = useSelector((state) => state.meet);
  const newMeet = new Meet("1", "Meet Up de fiesta", "2020-10-11",[]);
  useEffect(() => {
    dispatch(temperature()).then((response) => {
      console.log(response);
    });
  }, [dispatch]);

  const onClickAddMeet = (e) => {
    dispatch(addMeet(newMeet));
  };
  const onClickConfigMeet = (e) =>{
    history.push("/config/")
  }
  return (
    <>
      {meets.map((m, index) => {
        return (
          <Card className={classes.card} key={index}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://adenuniversity.us/files/sites/3/2018/11/shutterstock_633351611.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {m._descrip}
              </Typography>
              <Typography variant="body2" color="primary">
                {m._descrip}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">subscribe</Button>
              <Link to={"/config/" + m._id }>config</Link>
            </CardActions>
          </Card>
        );
      })}

      <Button onClick={onClickAddMeet}>Agregar</Button>
    </>
  );
};

export default Home;
