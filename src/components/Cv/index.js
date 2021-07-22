/* eslint-disable arrow-body-style */
import React from 'react';
import 'src/components/Cv/cv.scss';
import Contact from 'src/components/Cv/Contact';
import Presentation from 'src/components/Cv/Presentation';
import Personnalite from 'src/components/Cv/Personnalite';
import Competence from 'src/components/Cv/Competence';
import Experiences from 'src/components/Cv/Experience';
import Formation from 'src/components/Cv/Formation';

const Cv = () => {
  return (
    // <!--PAGE ENTIERE-->
    <div className="mainCv">
      <div className="blocPage">

        {/* <!--Partie GAUCHE--> */}
        <section className="partieGauche">
          <Presentation />
          <Contact />
          <Personnalite />
          <Competence />
          <Formation />
        </section>
        {/* <!--Partie DROITE--> */}
        <section className="partieDroite">
          <Experiences />
        </section>
      </div>
    </div>

  );
};

export default Cv;
