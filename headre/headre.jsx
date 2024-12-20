import React from 'react'
import { Link } from 'react-router-dom'
import './headre.css'
import picture from './online-exam-illustration-download-in-svg-png-gif-file-formats--paper-test-quiz-questionnaire-e-learning-pack-school-education-illustrations-5127256.webp'
import Body from '../Body/body'
import Footer from '../footer/Footer'

 const Headre = () => {
    
  return (
    <div>
        <header>
        <h1 className="main-title">Exam Online</h1>
        
        <nav className="navbar">
            <div className="nav-left">
                <img src={picture} alt="Exam Icon" className="nav-icon"/>
                <span className="nav-brand">Exam Online</span>
            </div>
            
            <div className="nav-right">
                <Link to="/login" className="nav-link">Se connecter</Link>
                <Link to="/register" className="nav-link">Créer un compte</Link>
            </div>
        </nav>
    </header> 
    </div>
  )
}
export default Headre
