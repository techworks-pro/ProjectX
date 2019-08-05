import React, { Component } from "react";
import axios from "axios";
import { Link, Route, Switch} from 'react-router-dom';
import AddQuiz from "./Inputs/addQuiz"

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    try {
      //axios build in json()
      const res = await axios.get(`/api/quizs`);
      this.setState({
        questions: res.data,
        isLoaded: true
      });
    } catch (err) {
      console.log(`Got error when fetching data, the error is ${err}`);
    }
  }

  render() {
    return this.state.isLoaded ? (
      <div> {this.state.questions.map(el=>{
        return <div>
                   <li>
          {el.question}
          </li>
          <li>
          {el.option1}
          </li>
          <li>
          {el.option2}
          </li>
          <li>
          {el.option3}
          </li>
          <li>
          {el.option4}
          </li>

          
         </div>
          
      })}
      
        <div>
          <button className="btn btn-light"><Link to="/quizs/AddQuiz" className="nav-link">Add Quiz</Link></button>
        </div>
        <Switch>
          <Route path="/quizs/AddQuiz" Component={AddQuiz}/>
        </Switch>
        
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default Quiz;