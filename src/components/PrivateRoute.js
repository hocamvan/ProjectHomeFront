import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, verifyFunction, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                verifyFunction() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}