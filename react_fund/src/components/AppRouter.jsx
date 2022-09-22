import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from './UI/pages/About'
import Error from './UI/pages/Error'
import Posts from './UI/pages/Posts'

function AppRouter() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/posts">
                <Posts />
            </Route>
            <Route path="/error">
                <Error />
            </Route>
            <Redirect to="/error" />
        </Switch>
    )
}

export default AppRouter