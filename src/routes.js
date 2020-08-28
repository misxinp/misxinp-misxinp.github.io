import React from 'react'
import HomeRoutes from './features/homepage/routes'
import TestRoutes from './features/other/routes'

const Routes = props => (
    <div>
        <HomeRoutes {...props} />
        <TestRoutes {...props} />
    </div>
)

export default Routes