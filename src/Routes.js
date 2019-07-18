import {AllApps, About} from './Components';
import React, {Component} from 'react';
import App from './App';
import {Route, Switch} from 'react-router-dom';

class Routes extends Component{
    constructor(){
        super()
        this.state={

        }
    }


    render(){
        return(
            <Switch>
                
                <Route path='/AllApps' component={AllApps}/>
                <Route path='/About' component={About}/>
                <Route path='/Home' component={App}/>

                <Route component={App}/>



            </Switch>
        )
    }


}

export default Routes;