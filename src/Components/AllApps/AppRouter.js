import ToDos from './ToDos/todoApps';
import React, { Component } from 'react';
import Counter from './Counter/counterApp';
// import AllApps from ''
// import CounterApp from './Counter/counterApp';
import { Route, Switch } from 'react-router-dom';
// import { Counter, ToDos } from './AppExport';

class AppRouter extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <Switch>
                <Route path='/Counter' component={Counter} />
                <Route path='/ToDos' component={ToDos} />
                {/* <Route path='/AllApps' component={AllApps} /> */}

                <Route path='/' component={Counter} />
            </Switch>
        )
    }
}
export default AppRouter;