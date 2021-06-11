import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const CustomizeAlert = ({ trigger, handleCloseAlert,severity, message }) => {
  return (
    <Snackbar open={trigger} autoHideDuration={1000} onClose={handleCloseAlert}>
      <Alert onClose={handleCloseAlert} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomizeAlert;
