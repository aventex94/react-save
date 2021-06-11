import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({component:Component,auth,...rest}) =>(
    <Route
        {...rest}
        render = {props =>
        auth._isAuthenticated === true ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )
    } />
);

const mapStateToProps = state =>({
    auth: state.auth.objectUser
});
export default connect(mapStateToProps)(PrivateRoute);