import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Score from '../pages/Score'
import Quiz from '../pages/Quiz'
import Home from '../pages/Home'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quizz' element={<Quiz />} />
        <Route path='/score' element={<Score />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
