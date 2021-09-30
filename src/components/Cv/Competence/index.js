import React from 'react';
import 'src/components/Cv/cv.scss';

const Competence = () => (
  <div className="acticle">
    <p className="t1 soulignage">Compétences</p>
    <div className="liste">
      <div className="liste__col">
        <p className="liste__titre">Technologies Web</p>
        <li className="liste__puce">CSS3, HTML5, Sass, jQuery</li>
        <li className="liste__puce">Javascript</li>
        <li className="liste__puce">Réact, Redux</li>
        <li className="liste__puce">Node.js, Express JS</li>
        <li className="liste__puce">MySQL, PostGres, Sequelize</li>
        <li className="liste__puce">Babel, Webpack</li>
      </div>
      <div className="liste__col">
        <p className="liste__titre">Outils</p>
        <li className="liste__puce">Méthode AGILE</li>
        <li className="liste__puce">Jira, Trello, Github</li>
        <li className="liste__puce">MCD, MLD</li>
        <li className="liste__puce">Gimp, Inkscape</li>
        <li className="liste__puce">Pack Office</li>
      </div>
    </div>

    <p className="liste__titre">Général</p>
    <div className="liste">
      <div className="liste__col">
        <li className="liste__puce">Gestion de projet</li>
        <li className="liste__puce">Analyse fonctionnelle</li>
        <li className="liste__puce">Méthodes pédagogiques</li>
      </div>
      <div className="liste__col">
        <li className="liste__puce">Maintenance applicative</li>
        <li className="liste__puce">Gestion d’équipe et des conflits</li>
      </div>
    </div>
  </div>
);
export default Competence;
