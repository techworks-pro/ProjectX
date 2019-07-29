import React from 'react';
import Highlight from 'react-highlight-js';

const CounterSource = () => {
    return (
        <div>
            <Highlight language="javascript">
{
`import React, { Component } from "react";
 import "./CounterApp.css";

 class counterApp extends Component {
   constructor() {
     super();
     this.state = {
       counter: 0,
       tog: "Single Count",
       togCount: 1
     };
   }

 render() {
     console.log("this is line number 13", this.state.counter);
     return (
         <div className="container">
         <div className="navbar">
             <h4>Counter.JS</h4>
         </div>
         <div className="counter">
             <h1> {this.state.counter} </h1>

             <button type="button" onClick={this.reset}>
             Reset
             </button>
             <button type="button" onClick={this.increment} className="buttons">
             Increment
             </button>
             <button type="button" onClick={this.decrement} className="buttons">
             Decrement
             </button>
             <button type="button" onClick={this.toggle} className="buttons">
             {this.state.tog}
             </button>
         </div>
         </div>
     );
 }`}
            </Highlight>
        </div>
        )
}

export default CounterSource;
