import { AllApps, About, Home } from './Components/index';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <Switch>
                <Route path='/AllApps' component={AllApps} />
                <Route path='/About' component={About} />
                <Route path='/Home' component={Home} />

                <Route path='/' component={Home} />
            </Switch>
        )
    }
}
export default Routes;