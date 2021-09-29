import React from 'react';
import 'src/components/Home/home.scss';
import pascal from 'src/components/Home/images/pascal.png';
import personnalite from 'src/assets/images/personnalite.png';
import poker from 'src/components/Home/images/poker.png';
import parcours from 'src/components/Home/images/parcours.png';
import react from 'src/components/Home/images/react.svg';
import html from 'src/components/Home/images/html.svg';
import css from 'src/components/Home/images/CSS.svg';
import sass from 'src/components/Home/images/sass.svg';
import redux from 'src/components/Home/images/redux.png';
import postgres from 'src/components/Home/images/postgres.svg';

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
            Après une belle carrière dans l'expertise fonctionnelle applicative, je me consacre désormais au développement web. Mes motivations restent identiques : proposer un service de qualité aux utilisateurs.
          </p>
          <div className="btn__refTech">
            <img className="btn__refTech__image2" src={react} alt="logo_réact" />
            <img className="btn__refTech__image2" src={sass} alt="logo_sass" />
            <img className="btn__refTech__image1" src={parcours} alt="MON PARCOURS PROFESSIONNEL" />
          </div>
          {/* <img className="image" src={parcours} alt="MON PARCOURS PROFESSIONNEL" /> */}
        </a>

        <a className="btn" href="https://pv-personnality.herokuapp.com/" target="_blank">
          <p className="titre">
            MAIS QUI SUIS-JE ?
          </p>
          <p className="resume">
            Vous souhaitez en apprendre davantage sur ma personnalié ? Je vous invite à consulter ce graphe intéractif.
          </p>
          <div className="btn__refTech">
            <img className="btn__refTech__image2" src={html} alt="logo_html" />
            <img className="btn__refTech__image2" src={css} alt="logo_css" />
            <img className="btn__refTech__image1" src={personnalite} alt="Qui suis-je ?" />
          </div>
        </a>

        <a className="btn" href="https://pokertool.herokuapp.com/" target="_blank">
          <p className="titre">
            PROJET : POKER-TOOL
          </p>
          <p className="resume">
            Poker-tool est une application conçue durant ma formation de "Déloppeur Web Fullstack". Elle s'adresse à tous ceux recherchant un outil afin de gérer un tournoi entre amis.
          </p>
          <p className="resume">
            Attention : cette application n'a pas pour objectif d'être responsive.
          </p>
          <div className="btn__refTech">
            <img className="btn__refTech__image2" src={redux} alt="logo_redux" />
            <img className="btn__refTech__image2" src={postgres} alt="logo_postgres" />
            <img className="btn__refTech__image1" src={poker} alt="PROJET : POKER-TOOL" />
          </div>

        </a>
      </div>
    </div>
  </div>
);

export default Home;
