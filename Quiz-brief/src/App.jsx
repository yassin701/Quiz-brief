import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Score from '../pages/Score'
import Quiz from '../pages/Quiz'
import Home from '../pages/home'


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
