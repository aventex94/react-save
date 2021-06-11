import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
const AdminRoute = ({component:Component,auth,...rest}) =>(
    <Route
        {...rest}
        render = {props =>
        auth._rol === 'ROL_ADMIN' ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    } />
);

const mapStateToProps = state =>({
    auth: state.auth.objectUser
});
export default connect(mapStateToProps)(AdminRoute);