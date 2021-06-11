import React, { useCallback } from "react";
import { addUser } from "../../actions/meet";
import useForceUpdate from "use-force-update";
import FactoryBeer from "../../model/FactoryBeer";
import { buyBeers } from "../../actions/meet";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableUser from "../User/TableUser";
import { Container, Row, Col } from "reactstrap";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  divider: {
    paddingTop: "20px",
  },
});
const Meet = () => {
  const arreglo = [];
  const forceUpdate = useForceUpdate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const factoryBeer = new FactoryBeer();
  const { id } = useParams();
  const meet = useSelector((state) => state.meet.meets).filter(
    (meet) => meet._id === id
  )[0];
  const strategy = factoryBeer.create(meet._temperature);
  const users = useSelector((state) => state.user);
  meet._users.map((u) => {
    arreglo.push(u._id);
  });
  const diffUsers = users.filter((x) => !arreglo.includes(x._id));
  const handleClickBuy = (e) => {
    dispatch(buyBeers(meet._id));
    forceUpdate();
  };
  const inviteUser = useCallback(
    (user) => {
      dispatch(addUser(user, meet._id));
      forceUpdate();
    },
    [dispatch, meet._id, forceUpdate]
  );

  return (
    <Container>
      <Paper elevation={3}>
        <Row xs="1" sm="2">
          <Col>
            <h4>Descrip: {meet._descrip}</h4>
          </Col>
          <Col>
            <h4>Date: {meet._date}</h4>
          </Col>
        </Row>
        <Divider className={classes.divider} />
        <Row xs="1" sm="2">
          <Col>
            <h4>Temperature:</h4>
          </Col>
          <Col>
            <h4>{meet._temperature}°c</h4>
          </Col>
        </Row>

        <Divider className={classes.divider} />
        <Paper elevation={3}>
          <Row xs="1" sm="2" md="3">
            <Col>
              <h4>Need beers: {strategy.calculateBeers(meet._users.length)}</h4>
            </Col>
            <Col>
              <h4>Beers: {meet._beers} </h4>
            </Col>
            <Col>
              <Button
                onClick={handleClickBuy}
                size="large"
                variant="contained"
                color="primary"
              >
                Buy Beer
              </Button>
            </Col>
          </Row>
        </Paper>
        <Divider className={classes.divider} />
        <h2> Persons registered to the meeting</h2>

        <TableUser invite={true} rows={meet._users} />
        <Divider className={classes.divider} />
        <h2>Persons to invite</h2>
        <TableUser inviteUser={inviteUser} invite={false} rows={diffUsers} />
      </Paper>
    </Container>
  );
};

export default Meet;
