import React from 'react';
import 'src/styles/home.scss';
import pascal from 'src/assets/images/pascal_Color.png';

const Header = () => (
  <div className="mainPresentation">
    <div className="presentation">
      <div className="presentation__gauche">
        <p className="presentation__gauche__nom">
          Pascal VALLADE
        </p>
        <p className="presentation__gauche__slogan">
          "Positionner l'utilisateur au coeur des projets."
        </p>
      </div>
      <img className="presentation__centre" src={pascal} alt="pascal" />
      <div className="presentation__droite">
        <p className="presentation__droite__metier">
          Développeur WEB FullStack JS
        </p>
        <p className="presentation__droite__metier">
          Consultant fonctionnel
        </p>
      </div>
    </div>
  </div>
);

export default Header;
