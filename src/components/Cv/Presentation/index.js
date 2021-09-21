import React from 'react';
import 'src/components/Cv/cv.scss';
import photo from 'src/components/Cv/images/photo_5_160.png';
import linkedin from 'src/components/Cv/images/linkedin.png';

const Presentation = () => (
  <div className="acticle">
    <p className="titleCv">Développeur Web Fullstack</p>
    <p className="presentationImg"><img src={photo} alt="pascal vallade" /></p>
    <p className="presentationT1">Pascal VALLADE</p>
    <p className="presentationT2">Né le : 28 mai 1971 (50 ans)</p>
    <p className="t4">«J’œuvre dans l’objectif d’accompagner les utilisateurs en leur apportant des services de qualité dans une relation apaisée. Ecouter, analyser et accompagner : des savoir-faire qui garantissent ma réussite. Désormais je mets en pratique cette orientation professionnelle dans la conception des outils web.»</p>
    <p>
      <img className="contactImg" src={linkedin} alt="linkedin" />
      <a className="titreLien__texteLien" href="https://www.linkedin.com" target="_blank"> www.linkedin.com/in/pascal-vallade</a>
    </p>
    <br />
    <p>
      <svg  
        className="contactImg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
        />
      </svg>
      <a className="titreLien__texteLien" href="./CV_Pascal_VALLADE.pdf" download="CV_Pascal_VALLADE.pdf">Télécharger mon cv au format PDF...</a>
    </p>
  </div>
);

export default Presentation;
