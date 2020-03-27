import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import StupidBingo from './StupidBingo'
import { Router, Switch, Route } from 'react-router-dom'
import CardCreator from './CardCreator'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Switch>
                <Route path="/creator">
                    <CardCreator />
                </Route>
                <Route path="/">
                    <StupidBingo />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
