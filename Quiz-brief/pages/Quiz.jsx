import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import quizData from './data/question'


export default function Quiz() {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const question = quizData[index];
    const navigate = useNavigate()

    const handlClick = (value) => {
        if (index < quizData.length - 1) {
            if (value === question.answer) {
                setScore(score + 1);
            }
            setIndex(index + 1)
        } else {
            navigate('/score', { state: { score: score + (value === question.answer ? 1 : 0), total: quizData.length } });
        }
    }
    return (
        <>
            <div className='container'>
                <h1>{index + 1}{question.question}</h1>
            </div>
            <div className='Btn'>
                <div className='Btn-content'>
                    {question.options.map((opt, i) => (
                        <button key={i} className='Btn-1' onClick={() => handlClick(opt)}>{opt}</button>

                    ))}
                </div>
            </div>
        </>
    )
}



