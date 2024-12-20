import React from 'react'
import './footer.css'


const Footer = () => {
  return (
    <div>
       <footer className="contact-footer">
       <h1>Contactez Nous</h1>
       
       <div className="contact-container">
           <div className="contact-card">
               <i className="fas fa-envelope"></i>
               <h3>Email</h3>
               <p>professeur@universite.fr</p>
           </div>
            <div className="contact-card">
               <i className="fas fa-phone"></i>
               <h3>Téléphone</h3>
               <p>+33 1 23 45 67 89</p>
           </div>
            <div className="contact-card">
               <i className="fas fa-map-marker-alt"></i>
               <h3>Adresse</h3>
               <p>123 Rue de l'Université</p>
               <p>75000 Paris, France</p>
           </div>
       </div>
        <div className="map-container">
           <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647951235774!5m2!1sen!2sfr" 
               allowfullscreen="" 
               loading="lazy">
           </iframe>
       </div>
   </footer> 
    </div>
  )
}
export default Footer
