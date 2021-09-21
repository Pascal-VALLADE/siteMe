import React from 'react';
import 'src/components/Cv/cv.scss';

const Formation = () => (
  <div className="acticle">
    <p className="t1 soulignage">Formations</p>
    <div>
      <li className="liste__titre">
        2021 : Formation développeur fullstack JS
      </li>
      <li className="liste__puce2">Niveau III - BAC + 2</li>
      <li className="liste__puce2">Spécialisation FrontEnd : Réact</li>
      <li className="liste__puce2Lien">
        <a
          href="https://oclock.io/formations/developpeur-web-fullstack-javascript"
          target="_blank"
          rel="noreferrer"
        >
          école O'Clock
        </a>
      </li>

      <br />
      <li className="liste__puce">1993 : BTS Automatisme</li>
    </div>
  </div>
);
export default Formation;
