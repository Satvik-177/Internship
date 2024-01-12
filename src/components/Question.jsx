//components/Question.js
import React from 'react';
import './question.css';

const Question = ({ question, onAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      <ul className="options-list">
        {question.options.map((option, index) => (
          <li key={index}>
            <p className="option-button" onClick={() => onAnswer(option)}>
              {option}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
