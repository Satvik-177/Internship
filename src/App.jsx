// App.js
import React, { useState } from 'react';
import './App.css';

import Question from './components/Question';
import Result from './components/Result';

const App = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: 'What is the capital of France?',
      options: ['Berlin', 'London', 'Paris', 'Madrid'],
      correctAnswer: 'Paris',
      userAnswer: null,
    },
    {
      id: 2,
      text: 'Which programming language is React written in?',
      options: ['Java', 'JavaScript', 'Python', 'C++'],
      correctAnswer: 'JavaScript',
      userAnswer: null,
    },
    {
      id: 3,
      text: 'Which is an example of noSQL Database?',
      options: ['MySQL', 'MariaDB', 'Oracle', 'MongoDB'],
      correctAnswer: 'MongoDB',
      userAnswer: null,
    },
    {
      id: 4,
      text: 'Which is not a framework of JavaScript?',
      options: ['Vue', 'React', 'Tailwind', 'Angular'],
      correctAnswer: 'Tailwind',
      userAnswer: null,
    },
    {
      id: 5,
      text: 'Which is one of the famous 3D library OF JavaScript?',
      options: ['One.js', 'Three.js', 'two.js', 'typescript.js'],
      correctAnswer: 'Three.js',
      userAnswer: null,
    },
    {
      id: 6,
      text: 'Capital of India?',
      options: ['New Delhi', 'Jaipur', 'Ahemdabad', 'Bengaluru'],
      correctAnswer: 'New Delhi',
      userAnswer: null,
    },
    {
      id: 7,
      text: 'Which one is not the part of DOM (Document Object Model)?',
      options: ['Cookies', 'console', 'session storage', 'local storage'],
      correctAnswer: 'console',
      userAnswer: null,
    },
    {
      id: 8,
      text: 'Statue of unity in which state?',
      options: ['Gujarat', 'Rajasthan', 'Maharashtra', 'Uttar Pradesh'],
      correctAnswer: 'Gujarat',
      userAnswer: null,
    },
    // Add more questions as needed
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (quizCompleted) {
      return; // Do nothing if the quiz is already completed
    }

    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].userAnswer = selectedAnswer;
    setQuestions(updatedQuestions);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions answered, set quizCompleted to true
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuestions(
      questions.map((question) => ({
        ...question,
        userAnswer: null,
      }))
    );
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="app">
      <div className="score-container">
        <p>Score: {score}</p>
      </div>
      {currentQuestion < questions.length ? (
        <div className="question-container">
          <Question
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            key={questions[currentQuestion].id}
          />
        </div>
      ) : (
        <div className="result-container">
          <Result score={score} totalQuestions={questions.length} onReset={resetQuiz} />
        </div>
      )}
    </div>
  );
};

export default App;