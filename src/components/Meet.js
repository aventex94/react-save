import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableUser from "./layout/TableUser";
import { Container, Row, Col } from "reactstrap";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  container: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
});
const Meet = (meet) => {
  console.log(meet);
  const classes = useStyles();
  const users = useSelector((state) => state.user);
  const {meets} = useSelector((state) => state.meet)
  const realMeets = meets;
  console.log(realMeets);
  console.log(users);
  return (
    <Container className={classes.container}>
      <Paper elevation={3}>
        <Row xs="2">
          <Col>
            <h3>Temperature</h3>
          </Col>
          <Col>
            <h3>ACA VA LA TEMPERATURA</h3>
          </Col>
        </Row>
      </Paper>
      <Divider />
      <Paper elevation={3}>
        <Row xs="2">
          <Col>
            <h3>Birras</h3>
          </Col>
          <Col>
            <h3>Cantidad de Birras</h3>
            <Button>Comprar</Button>
          </Col>
        </Row>
      </Paper>

      <h1>Registered to the meeting</h1>

      <TableUser rows={users} />
      <h1>Users</h1>
      <TableUser rows={users} />
    </Container>
  );
};

export default Meet;
