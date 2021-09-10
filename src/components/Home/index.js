import React from 'react';
import 'src/components/Home/home.scss';
import pascal from 'src/components/Home/images/pascal.png';
import personnalite from 'src/assets/images/personnalite.png';
import poker from 'src/components/Home/images/poker.png';
import parcours from 'src/components/Home/images/parcours.png';
// test
const Home = () => (
  <div className="mainHome">
    <div className="mainPresentation">
      <div className="presentation">
        <div className="presentation__gauche">
          <p className="presentation__gauche__nom">
            Pascal VALLADE
          </p>
          <p className="presentation__gauche__metier">
            Développeur WEB FullStack JS
          </p>
        </div>
        <img className="presentation__centre" src={pascal} alt="pascal" />
        <p className="presentation__droite">
          "Positionner l'utilisateur au coeur des projets."
        </p>
      </div>

      <div className="containerBtn">
        <a className="btn" href="/cv" target="_blank">
          <p className="titre">
            MON PARCOURS PROFESSIONNEL
          </p>
          <p className="resume">
            Aprés une belle carrière dans l'expertise fonctionnelle applicative, je me consacre désormais au développement web. Mes motivations restent identiques : proposer un service de qualité aux utilisateurs.
          </p>
          <img className="image" src={parcours} alt="MON PARCOURS PROFESSIONNEL" />
        </a>

        <a className="btn" href="https://siteme-personnalite.herokuapp.com/" target="_blank">
          <p className="titre">
            MAIS QUI SUIS-JE ?
          </p>
          <p className="resume">
            Vous souhaitez en apprendre davantage sur ma personnalié ? Je vous invite à consulter ce graphe intéractif.
          </p>
          <img className="image" src={personnalite} alt="Qui suis-je ?" />
        </a>

        <a className="btn" href="/cv" target="_blank">
          <p className="titre">
            PROJET : POKER-TOOL
          </p>
          <p className="resume">
            Poker-tool est une application conçue durant ma formation de "Déloppeur Web Fullstack". Elle s'adresse à tous ceux recherchant un outil afin de gérer un tournoi entre amis.
          </p>
          <img className="image" src={poker} alt="PROJET : POKER-TOOL" />
        </a>
      </div>
    </div>
  </div>
);

export default Home;
