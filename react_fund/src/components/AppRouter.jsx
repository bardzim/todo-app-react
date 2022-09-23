import React from 'react'
import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router'
import Loader from './UI/Loader/Loader';

function AppRouter() {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if(isLoading) {
        return isAuth
    }

    return (
        isAuth ? 
        <Switch>
            {privateRoutes.map(route =>
                <Route
                key={route.key} 
                component={route.component} 
                path={route.path} 
                exact={route.exact}
                />
            )}
            <Redirect to="/posts/" />
        </Switch>
        :   
        <Switch>
            {publicRoutes.map(route =>
            <Route
            key={route.key} 
            component={route.component} 
            path={route.path} 
            exact={route.exact}/>
        )}
        <Redirect to="/login" />
        </Switch>
    )
}

export default AppRouter