import React from 'react'
import { useNavigate } from 'react-router'

export default function home() {
  const Navigate = useNavigate();
  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1>Welcome To Quiz App</h1>
        <h3>Test Your Knowledge</h3>
        <p>Challenge yourself with fun quizzes and see how much you really know</p>
        <button onClick={()=> Navigate('/quizz')}>Start Quiz</button>

      </div>

    </div>
  )
}
