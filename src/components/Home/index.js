import React from 'react';
import 'src/styles/home.scss';
import react from 'src/assets/images/react.png';
import html from 'src/assets/images/html.svg';
import css from 'src/assets/images/CSS.svg';
import sass from 'src/assets/images/sass.svg';
import postgres from 'src/assets/images/postgres.png';
import js from 'src/assets/images/js.png';
import nodejs from 'src/assets/images/Nodejs.png';

const Home = () => (
  <div className="containerBtn">
    <a className="btn" href="/cv" target="_blank">
      <p className="titre">MON PARCOURS...</p>
      <p className="resume">
        Après une belle carrière dans l'expertise fonctionnelle applicative, je
        me consacre désormais au développement web. Mes motivations restent
        identiques : proposer un service de qualité aux utilisateurs.
      </p>
      <div className="btn__refTech">
        <img className="btn__refTech__image2" src={js} alt="logo_js" />
        <img className="btn__refTech__image2" src={react} alt="logo_réact" />
        <img className="btn__refTech__image2" src={sass} alt="logo_sass" />
        {/* <img
          className="btn__refTech__image1"
          src={parcours}
          alt="MON PARCOURS PROFESSIONNEL"
        /> */}
      </div>
    </a>

    <a
      className="btn"
      href="https://pv-personnality.herokuapp.com/"
      target="_blank"
      rel="noreferrer"
    >
      <p className="titre">MAIS QUI SUIS-JE ?</p>
      <p className="resume">
        Vous souhaitez en apprendre davantage sur ma personnalié ? Je vous
        invite à consulter ce graphe intéractif.
      </p>
      <div className="btn__refTech">
        <img className="btn__refTech__image2" src={html} alt="logo_html" />
        <img className="btn__refTech__image2" src={css} alt="logo_css" />
        {/* <img
          className="btn__refTech__image1"
          src={personnalite}
          alt="Qui suis-je ?"
        /> */}
      </div>
    </a>

    <a className="btn" href="https://pokertool.herokuapp.com/" target="_blank" rel="noreferrer">
      <p className="titre">PROJET : POKER-TOOL</p>
      <p className="resume">
        Poker-tool est une application conçue durant ma formation de "Déloppeur
        Web Fullstack". Elle s'adresse à tous ceux recherchant un outil afin de
        gérer un tournoi entre amis.
      </p>
      <p className="resume">
        Attention : cette application n'a pas pour objectif d'être responsive.
      </p>
      <div className="btn__refTech">
        <img className="btn__refTech__image2" src={js} alt="logo_js" />
        <img className="btn__refTech__image2" src={react} alt="logo_réact" />
      </div>
      <div className="btn__refTech">
        {/* <img className="btn__refTech__image2" src={redux} alt="logo_redux" /> */}
        <img className="btn__refTech__image2" src={nodejs} alt="logo_nodejs" />
        <img className="btn__refTech__image2" src={postgres} alt="logo_postgres" />
        {/* <img className="btn__refTech__image1" src={poker} alt="PROJET : POKER-TOOL" /> */}
      </div>
    </a>
  </div>
);

export default Home;
