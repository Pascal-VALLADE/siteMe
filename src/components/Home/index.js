import React from 'react';
import 'src/styles/home.scss';
import react from 'src/assets/images/react.png';
import redux from 'src/assets/images/react_redux.png';
import html from 'src/assets/images/html.svg';
import css from 'src/assets/images/CSS.svg';
import sass from 'src/assets/images/sass.svg';
import postgres from 'src/assets/images/postgres.png';
import js from 'src/assets/images/js.png';
import nodejs from 'src/assets/images/Nodejs.png';

const Home = () => (
  <div className="containerBtn">
    <a className="btn" href="/cv" target="_blank">
      <div className="btn__txt">
        <p className="btn__txt__titre">MON PARCOURS...</p>
        <p className="btn__txt__resume">
          Après une belle carrière dans l'expertise fonctionnelle applicative, je
          me consacre désormais au développement web. Mes motivations restent
          identiques : proposer un service de qualité aux utilisateurs.
        </p>
      </div>
      <div className="btn__refTech">
        <fieldset className="btn__refTech__fieldSet">
          <legend className="btn__refTech__fieldSet__legend">Stack technique</legend>
          <img className="btn__refTech__fieldSet__image" src={js} alt="logo_js" />
          <img className="btn__refTech__fieldSet__image" src={react} alt="logo_réact" />
          <img className="btn__refTech__fieldSet__image" src={sass} alt="logo_sass" />
        </fieldset>
      </div>
    </a>

    <a
      className="btn"
      href="https://pv-personnality.herokuapp.com/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="btn__txt">
        <p className="btn__txt__titre">MAIS QUI SUIS-JE ?</p>
        <p className="btn__txt__resume">
          Vous souhaitez en apprendre davantage sur ma personnalié ? Je vous
          invite à consulter ce graphe intéractif.
        </p>
      </div>

      <div className="btn__refTech">
        <fieldset className="btn__refTech__fieldSet">
          <legend className="btn__refTech__fieldSet__legend">Stack technique</legend>
          <img className="btn__refTech__fieldSet__image" src={html} alt="logo_html" />
          <img className="btn__refTech__fieldSet__image" src={css} alt="logo_css" />
        </fieldset>
      </div>

    </a>

    <a className="btn" href="https://pokertool.herokuapp.com/" target="_blank" rel="noreferrer">
      <div className="btn__txt">
        <p className="btn__txt__titre">PROJET : POKER-TOOL</p>
        <p className="btn__txt__resume">
          Poker-tool est une application conçue durant ma formation de "Déloppeur
          Web Fullstack". Elle s'adresse à tous ceux recherchant un outil afin de
          gérer un tournoi entre amis.
        </p>
        <p className="btn__txt__resume">
          Attention : cette application n'a pas pour objectif d'être responsive.
        </p>
      </div>

      <div className="btn__refTech">
        <fieldset className="btn__refTech__fieldSet">
          <legend className="btn__refTech__fieldSet__legend">Stack technique</legend>
          <img className="btn__refTech__fieldSet__image" src={js} alt="logo_js" />
          <img className="btn__refTech__fieldSet__image" src={redux} alt="logo_réact" />
          <img className="btn__refTech__fieldSet__image" src={postgres} alt="logo_postgres" />
          <img className="btn__refTech__fieldSet__image" src={nodejs} alt="logo_nodejs" />
        </fieldset>
        {/* <img className="btn__refTech__image2" src={redux} alt="logo_redux" /> */}
      </div>
    </a>
  </div>
);

export default Home;
