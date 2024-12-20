import React from 'react'
import './body.css'


const Body = () => {
  return (
    <div>
         <section className="exam-categories">
        <div className="exam-card">
            <div className="card-icon">💻</div>
            <h2>Programmation Web</h2>
            <p>HTML, CSS, JavaScript, PHP</p>
            <span className="difficulty">Difficulté: Moyenne</span>
        </div>
    
        <div className="exam-card">
            <div className="card-icon">🔧</div>
            <h2>Backend Development</h2>
            <p>React.js, Python, Java, SQL</p>
            <span className="difficulty">Difficulté: Avancée</span>
        </div>
    
        <div className="exam-card">
            <div className="card-icon">📱</div>
            <h2>Mobile Development</h2>
            <p>React Native, Flutter, Android</p>
            <span className="difficulty">Difficulté: Avancée</span>
        </div>
    </section>
    
    <section className="features-grid">
        <div className="feature-item">
            <div className="feature-icon">🖥️</div>
            <h3>Environnement IDE</h3>
            <p>Codez directement dans le navigateur</p>
        </div>
        <div className="feature-item">
            <div className="feature-icon">🔍</div>
            <h3>Tests Automatisés</h3>
            <p>Vérification du code en temps réel</p>
        </div>
        <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h3>Analyse de Code</h3>
            <p>Feedback sur la qualité du code</p>
        </div>
        <div className="feature-item">
            <div className="feature-icon">🚀</div>
            <h3>Projets Pratiques</h3>
            <p>Apprenez en construisant</p>
        </div>
    </section> 

    </div>
  )
}
export default Body
