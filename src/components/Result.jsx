// components/Result.js
import React from 'react';

const Result = ({ score, totalQuestions, onReset }) => {
  return (
    <div className="result-container">
      <h2>Game Over!</h2>
      <p>Your Final Score: {score} / {totalQuestions}</p>
      <button onClick={onReset}>Try Again</button>
    </div>
  );
};

export default Result;
