import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Score() {
  const Navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score || 0;
  const total = location.state?.total || 10;

  let Msg = ""
  if (score === 0) {
    Msg = "😢 Essaie encore !"
  } else if (score >= 1 && score <= 5) {
    Msg = "👀 Pas mal, tu peux faire mieux !"
  } else if (score >= 6 && score <= 7) {
    Msg = "👏 Bien joué !"
  } else if (score >= 8 && score <= 10) {
    Msg = "🔥 Excellent travail !"
  }

  return (
    <div className='score-content'>
      <div className='score-container'>
        <h3>{Msg}</h3>
        <p>Votre score est {score} / {total} </p>
        <button onClick={() => Navigate('/')}>Back to Home</button>
      </div>
    </div>
  )
}
