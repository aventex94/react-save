import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Meet from "../../model/Meet";
import moment from "moment";
import { addMeet,getTemperatureByDate } from "../../actions/meet"
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "reactstrap";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import CustomizeAlert from "../layout/CustomizeAlert"

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const useStyles = makeStyles({
  container: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    alignItems: "flex-start",
  },
  divider: {
    paddingTop: "20px",
  },
  text: {
    paddingTop: "16px",
  },
});
const AddMeet = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { meets } = useSelector((state) => state.meet);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [descrip, setDescrip] = useState("");

  const [triggerError, setTriggerError] = useState(false);
  const [triggerSuccess, setTriggerSuccess] = useState(false);
  const handleCloseAlert = useCallback(() => {
    setTriggerSuccess(false);
    setTriggerError(false);
  }, []);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const onChangeDescrip = (e) => {
    let descrip = e.target.value;
    setDescrip(descrip);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let date = moment(selectedDate).format("YYYY-MM-DD");
    let id = (meets.length + 1).toString();
    const newMeet = new Meet(id, descrip, date, "", [], 0, "");
    dispatch(addMeet(newMeet));
    dispatch(getTemperatureByDate(newMeet._date, id))
      .then((response) => {
        setTriggerSuccess(true);
      })
      .catch((err) => {
        throw err;
        setTriggerError(true);
      });
  };
  return (
    <Container className={classes.container}>
      <h3>Add Meet</h3>
      <form onSubmit={onSubmit}>
        <Row xs="1" sm="2" className={classes.divider}>
          <Col>
            <TextField
              required
              onChange={onChangeDescrip}
              value={descrip}
              className={classes.text}
              id="standard-basic"
              label="Descrip"
            />
          </Col>
          <Col>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy-M-d"
                margin="normal"
                id="date-picker-inline"
                label="Date to meet"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </Col>
        </Row>

        <Row className={classes.divider} x1="1" sm="2">
          <Col>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Create
            </Button>
            <CustomizeAlert
              trigger={triggerSuccess}
              handleCloseAlert={handleCloseAlert}
              severity="success"
              message="The meet has been created"
            />
            <CustomizeAlert
              trigger={triggerError}
              handleCloseAlert={handleCloseAlert}
              severity="error"
              message="An error has occurred"
            />
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default AddMeet;
