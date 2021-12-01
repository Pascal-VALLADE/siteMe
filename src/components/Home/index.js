import React from 'react';
import 'src/components/Home/home.scss';
import personnalite from 'src/components/Home/images/personnality.png';
import poker from 'src/components/Home/images/logo_noir.svg';
import parcours from 'src/components/Home/images/parcours.png';
import react from 'src/components/Home/images/react.png';
import html from 'src/components/Home/images/html.svg';
import css from 'src/components/Home/images/CSS.svg';
import sass from 'src/components/Home/images/sass.svg';
import redux from 'src/components/Home/images/redux.png';
import postgres from 'src/components/Home/images/postgres.png';
import js from 'src/components/Home/images/js.png';
import nodejs from 'src/components/Home/images/Nodejs.png';

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
