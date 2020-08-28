import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'

const Routes = props => (
    <Switch>
        <Route exact path="/" component={HomePage} {...props} />
    </Switch>
)

export default Routes
