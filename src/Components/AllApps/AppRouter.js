import React, { Component } from "react";
// import ToDos from "./ToDos/todoApps";
// import Counter from "./Counter/counterApp";
// import AllApps from ''
// import CounterApp from './Counter/counterApp';
import { Route, Switch } from "react-router-dom";
import { Counter, ToDos } from "./AppExport";

class AppRouter extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  //   render() {
  //     console.log("props:", this.props);
  //     return (
  //       <Switch>
  //         <Route path="/AllApps/Counter" component={Counter} />
  //         <Route path="/AllApps/ToDos" component={ToDos} />
  //         {/* <Route path='/AllApps' component={AllApps} /> */}
  //         <Route component={Counter} />
  //       </Switch>
  //     );
  //   }
}
export default AppRouter;
