import React, { useState } from 'react'

const questions = [
  {
    questionText : 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false},
      { answerText: 'London', isCorrect: false},
      { answerText: 'Paris', isCorrect: true},
      { answerText: 'Dublin', isCorrect: false},
    ],
  },
  {
    questionText : 'What is the capital of USA?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false},
      { answerText: 'WashingtonDC', isCorrect: true},
      { answerText: 'Monetral', isCorrect: false},
      { answerText: 'Dublin', isCorrect: false},
    ],
  },
  {
    questionText : 'What is the capital of India?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false},
      { answerText: 'London', isCorrect: false},
      { answerText: 'Kabul', isCorrect: false},
      { answerText: 'Delhi', isCorrect: true},
    ],
  },
  {
    questionText : 'What is the capital of Italy?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false},
      { answerText: 'Paris', isCorrect: false},
      { answerText: 'Rome', isCorrect: true},
      { answerText: 'Dublin', isCorrect: false},
    ],
  },
  {
    questionText : 'What is the capital of Venezuela?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false},
      { answerText: 'Caracas', isCorrect: true},
      { answerText: 'Paris', isCorrect: false},
      { answerText: 'Dublin', isCorrect: false},
    ],
  },
];

function App() {
  const [currentquestion, setCurrentQuestion] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true)
    setSelectedAnswer(index)
    if(isCorrect) {
      setScore(score + 1)
    }
  }

  const NextQuestion = () => {
    setAnswered(false)
    setSelectedAnswer(null)
    const nextQuestion = currentquestion + 1;
    if(nextQuestion < questions.length) {
    setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-300">
      <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg bg-cyan-100">
        <div className="p-2 border-2 border-zinc-300 text-center font-bold mb-2 text-xl">Quiz App</div>
        {showScore ? <div>
          You scored {score} of {questions.length}
        </div> : 
        <div>
          <div>{questions[currentquestion].questionText}</div>
          {questions[currentquestion].answerOptions.map((option, index) => (
            <button
            onClick={() => handleAnswerOption(index, option.isCorrect)} key={index}
            className={`block w-full p-2 mt-2 rounded border-2 border-zinc-300 ${
              answered ? 
                option.isCorrect ?
                " bg-green-200"
                : selectedAnswer === index ?
                " bg-red-200"
                : ""
                : ""
            }`}>
            {option.answerText}</button>
          ))}
          <button className={`${answered ? "bg-green-500" : "bg-green-300"} block w-full bg-green-500 text-white p-2 mt-2 rounded`}
          disabled = {answered ? "" : "disabled"}
          onClick={NextQuestion}>Next Questions</button>
          <p className="text-center text-black-400 text-md mt-2">Question {currentquestion + 1} of {questions.length}</p>
        </div>
      }
      </div>
    </div>
  )
}

export default App
