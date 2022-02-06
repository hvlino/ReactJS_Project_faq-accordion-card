import React from 'react';
import './Questions.css';
import questionsData from './Questions-data.json';
import { ReactComponent as Chevron } from '../images/icon-arrow-down.svg';



const Question = () => {
    return <div className='text'>
    <div className='title'>
      <h1>FAQ</h1>
    </div>
    <div className='questions'>
        {questionsData.map((e) => 
            <div className='question-block'>
                <div className="question">{e.question} <Chevron /></div>
                <div className="answer">{e.answer}</div>
            </div>      
        )}
    </div>
  </div>
}

export default Question;