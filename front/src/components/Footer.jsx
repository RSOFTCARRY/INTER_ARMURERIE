import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer fixed bottom-0 w-full ">
      <div className="footer-links">
        <a href="CGU">CGU</a>
        <a href="contact">Contact</a>
        <a href="mentionsLégales">Mentions légales</a>
      </div>
      <p className="footer-contact">
        572 CHEMIN DU HAUT COULOUBRIER 06810 AURIBEAU SUR SIAGNE, 0662607400,  
        <a href="mailto:interarm@gmail.com"> interarm@gmail.com</a>
      </p>
    </footer>
  );
}
