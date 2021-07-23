import React from 'react';
import 'src/components/Cv/cv.scss';
import photo from 'src/components/Cv/images/photo_5_160.png';

const Presentation = () => (
  <div className="acticle">
    <p className="presentationImg"><img src={photo} alt="pascal vallade" /></p>
    <p className="presentationT1">Pascal VALLADE</p>
    <p className="presentationT2">Né le : 28 mai 1971 (50 ans)</p>
    <p className="t4">«J’œuvre dans l’objectif d’accompagner les utilisateurs en leur apportant des services de qualité dans une relation apaisée. Ecouter, analyser et accompagner : des savoir-faire qui garantissent ma réussite. Désormais je mets en pratique cette orientation professionnelle dans la conception des outils web.»</p>

    <a className="titreLien__texteLien" href="./CV_Pascal_VALLADE.pdf" download="CV_Pascal_VALLADE.pdf">Télécharger mon cv au format PDF...</a>


  </div>
);

export default Presentation;
