import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import About from './UI/pages/About'
import Error from './UI/pages/Error'
import PostIdPage from './UI/pages/PostIdPage'
import Posts from './UI/pages/Posts'

function AppRouter() {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route exact path="/posts">
                <Posts />
            </Route>
            <Route path="/error">
                <Error />
            </Route>
            <Route exact path="/posts/:id">
                <PostIdPage />
            </Route>
            <Redirect to="/error" />
        </Switch>
    )
}

export default AppRouter