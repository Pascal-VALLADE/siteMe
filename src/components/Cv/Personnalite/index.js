import React from 'react';
import 'src/components/Cv/cv.scss';
import { Redirect, Link } from 'react-router-dom';

const Personnalite = () => (
  <div className="acticle">
    <div className="titreLien">
      <p className="titreLien__titre">Personnalité</p>
      <p>
        <button
          type="button"
          className="titreLien__texteLien"
          onClick="../images/CV_Pascal_VALLADE.pdf"
          target="_blank"
        >En savoir plus...
        </button>
      </p>
    </div>

    <p className="t3">Une capacité à mettre pleinement en œuvre mes atouts et mon énergie dans des projets faisant écho à mes valeurs.</p>

    <div className="liste">
      <div className="liste__col">
        <li className="liste__puce">Bon relationnel</li>
        <li className="liste__puce">Adaptation</li>
        <li className="liste__puce">Esprit d’équipe</li>
      </div>

      <div className="liste__col">
        <li className="liste__puce">Organisé</li>
        <li className="liste__puce">Rigoureux</li>
        <li className="liste__puce">Autonome</li>
      </div>
    </div>
  </div>

);
export default Personnalite;
