import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'>TechEdu</div>
      <ul className='nav-links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quizz">Quiz</Link></li>
        <li><Link to="/score">Score</Link></li>

      </ul>
    </nav>
  );
}
