import React from 'react';


const addQuiz = () => (
    <form>
        <div className="form-group">
            <label for="question">Question</label>
            <input
                type="text"
                class="form-control"
                id = "question"/>
        </div>
        <div className="form-group">
            <label for="option1">Question</label>
            <input
                type="text"
                class="form-control"
                id = "option1"/>
        </div>
        <div className="form-group">
            <label for="option2">option2</label>
            <input
                type="text"
                class="form-control"
                id = "option2"/>
        </div>
        <div className="form-group">
            <label for="option3">option3</label>
            <input
                type="text"
                class="form-control"
                id = "option3"/>
        </div>
        <div className="form-group">
            <label for="option4">option4</label>
            <input
                type="text"
                class="form-control"
                id = "option4"/>
        </div>
        <div className="form-group">
            <label for="answer">answer</label>
            <input
                type="text"
                class="form-control"
                id = "answer"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
)


export default addQuiz;