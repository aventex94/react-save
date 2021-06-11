import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./Nav";
import { Container } from "reactstrap";
const useStyles = makeStyles({
  mainLayout: {
    display: "flex",
    flexWrap:"wrap",
    justifyContent:"center",
    paddingTop:"50px"
    
  },
});

const Main = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <>
      <Nav />
      <Container className={classes.mainLayout}>
      
        {children}
     
      </Container>
    </>
  );
};

export default Main;
