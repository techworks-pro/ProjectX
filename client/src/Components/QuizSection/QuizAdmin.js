import React, { Component } from 'react';
import axios from 'axios';
import './quiz.css';

class QuizAdmin extends Component {
constructor(){
    this.state={
        qstn='',
        op1='',
        op2='',
        op3='',
        op4='',
        ans=''
    }
}
handleChange = event => {
    this.setState({ currentTodo: event.target.value });
  };
render(){
return(
    <div className="QuizAdminBody">
        <div>
            Insert Quiz
        </div>
        <div className="QuizTable">

        <table style="width:100%">
                     <tr>
                <th>Question</th>
                <th>Option1</th> 
                <th>Option2</th> 
                <th>Option3</th> 
                <th>Option4</th> 
                <th>Answer</th> 
                     </tr>
                 <tr>
                 <th>
                     <input type="text" />
                 </th>
                 <th>
                     <input type="text" />
                 </th><th>
                     <input type="text" />
                 </th><th>
                     <input type="text" />
                 </th><th>
                     <input type="text" />
                 </th><th>
                     <input type="text" />
                 </th>
                    </tr>
                    <tr>
                <th>Sample Question</th>
                <th>Sample Option1</th> 
                <th>Sample Option2</th> 
                <th>Sample Option3</th> 
                <th>Sample Option4</th> 
                <th>Sample Answer</th> 
                     </tr>
</table>

        </div>
    </div>
    )
}

}
export default QuizAdmin;