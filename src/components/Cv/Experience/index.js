import React from 'react';
import 'src/components/Cv/cv.scss';

const Experience = () => (
  <div>
    <div className="acticle">
    <p className="experienceTitre">EXPERIENCES PROFESSIONNELLES</p>
      <div className="periode">
        <div className="periode_date">09/1994</div>
        <div className="periode_duree">( 5 ans )</div>
        <div className="periode_date">08/1999</div>
      </div>
      <p className="t5">Technicien support logiciels</p>
      <p className="t6">
        <a className="t6__lien" href="https://www.berger-levrault.com/fr/" target="_blank">BERGER-LEVRAULT</a>
        <span> - EDITEUR DE LOGICIELS POUR COLLECTIVITÉS LOCALES - TOULOUSE</span>
      </p>
    </div>

    <div className="acticle">
      <div className="periode">
        <div className="periode_date">09/1999</div>
        <div className="periode_duree">( 3 ans )</div>
        <div className="periode_date">06/2002</div>
      </div>
      <p className="t5">Consultant / Formateur indépendant</p>
      <p className="t6">SOUS-TRAITANT DU GROUPE BERGER-LEVRAULT - FREELANCE - ANGOULÊME</p>
    </div>

    <div className="acticle">
      <div className="periode">
        <div className="periode_date">07/2002</div>
        <div className="periode_duree">( 6 ans )</div>
        <div className="periode_date">08/2008</div>
      </div>
      <p className="t5">Responsable service logiciels</p>
      <div className="liste">
        <p className="liste__titre">Optimiser la mise en œuvre, et l’assistance des logiciels</p>
        {/* <button
          type="button"
          className="liste__lien"
        >
          <svg
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
            />
          </svg>
        </button> */}
      </div>
      <li className="liste__puce">Gestion de l’assistance, des formations et des déploiements</li>
      <li className="liste__puce">Gestion de l’amélioration continue du service (9 collaborateurs)</li>
      <li className="liste__puce">Mise en œuvre d’indicateurs et de tableaux de bord (via CRM)</li>
      <li className="liste__puce">Veille réglementaire et suivi des éditeurs</li>
      <li className="liste__puce">tests des mises à jour avant déploiement, mise à jour des documents</li>
      <br />
      <p className="t5">Chef de projets nouvelle offre</p>
      <div className="liste">
        <p className="liste__titre">Répondre aux nouveaux besoins logiciels émergents</p>
        {/* <button
          type="button"
          className="liste__lien"
        >
          <svg
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
            />
          </svg>
        </button> */}
      </div>
      <div>
        <div className="liste">
          <div className="liste__col">
            <li className="liste__puce">Analyse et cahier des charges</li>
            <li className="liste__puce">Définition de l’offre commerciale</li>
          </div>
          <div className="liste__col">
            <li className="liste__puce">Gestion des appels d’offres</li>
            <li className="liste__puce">Procédure de déploiement</li>
          </div>
        </div>
      </div>
        <p className="t6">
          <a className="t6__lien" href="https://www.soluris.fr/" target="_blank">SOLURIS</a>
          <span> - SYNDICAT INFORMATIQUE POUR COLLECTIVITÉS LOCALES - SAINTES</span>
        </p>
    </div>

    <div className="acticle">
      <div className="periode">
        <div className="periode_date">10/2008</div>
        <div className="periode_duree">( 8 ans )</div>
        <div className="periode_date">11/2015</div>
      </div>
      <p className="t5">Chef de projets nouvelle gamme</p>
      <div className="liste">
        <p className="liste__titre">Concevoir une gamme logicielle pour la gestion des structures d‘accueil de l’enfant (centres de loisirs, crèches, etc.)</p>
        {/* <button
          type="button"
          className="liste__lien"
        >
          <svg
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
            />
          </svg>
        </button> */}
      </div>
      <li className="liste__puce">Création et animation d’un panel de structures pilotes</li>
      <li className="liste__puce">Rédaction du cahier des charges et suivi des développements</li>
      <li className="liste__puce">Définition de l’offre et de la stratégie commerciale</li>
      <br />
      <p className="t5">Responsable du service clients</p>
      <div className="liste">
        <p className="liste__titre">Déployer la solution logicielle - 180 sites, 1200 utilisateurs.</p>
        {/* <button
          type="button"
          className="liste__lien"
        >
          <svg
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
            />
          </svg>
        </button> */}
      </div>
      <div className="liste">
        <div className="liste__col">
          <li className="liste__puce">Avant-vente et analyse du besoin</li>
          <li className="liste__puce">Formation et assistance	</li>
        </div>
        <div className="liste__col">
          <li className="liste__puce">Paramétrage et tests</li>
          <li className="liste__puce">Amélioration continue</li>
        </div>
      </div>
    </div>
    <p className="t6">
      <a className="t6__lien" href="https://www.innovortex.fr/" target="_blank">INNOVORTEX</a>
      <span> - EDITEUR DE SOLUTIONS WEB - LA ROCHELLE</span>
    </p>
    
    <div className="acticle">
      <div className="periode">
        <div className="periode_date">03/2017</div>
        <div className="periode_duree">( 2 ans et 6 mois )</div>
        <div className="periode_date">07/2019</div>
      </div>
      <p className="t5">Expert fonctionnel - Billetterie et contrôle d’accès</p>
      <div className="liste">
        <p className="liste__titre">Déployer la solution logicielle</p>
        {/* <button
          type="button"
          className="liste__lien"
        >
          <svg
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
            />
          </svg>
        </button> */}
      </div>
      <div className="liste">
        <div className="liste__col">
          <li className="liste__puce">Analyse du besoin fonctionnel</li>
          <li className="liste__puce">Formation</li>
        </div>
        <div className="liste__col">
          <li className="liste__puce">Paramétrage et tests</li>
          <li className="liste__puce">Assistance au démarrage</li>
        </div>
      </div>
      <p className="t6">
        <a className="t6__lien" href="https://corporate.vivaticket.com/fr" target="_blank">VIVATICKET</a>
        <span> - EDITEUR DE LOGICIELS - POITIERS</span>
      </p>
    </div>

    <div className="acticle">
      <div className="periode">
        <div className="periode_date">08/2019</div>
        <div className="periode_duree">( 2 ans )</div>
        <div className="periode_date">. . . .</div>
      </div>
      <p className="t5">Consultant fonctionnel - Grand Angle Finances</p>
      <div className="liste">
        <p className="liste__titre">Déployer la solution logicielle</p>
        {/* <button
          type="button"
          className="liste__lien"
        >
          <svg
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
            />
          </svg>
        </button> */}
      </div>
      <div className="liste">
        <div className="liste__col">
          <li className="liste__puce">Analyse du besoin fonctionnel</li>
          <li className="liste__puce">Formation</li>
        </div>
        <div className="liste__col">
          <li className="liste__puce">Paramétrage et tests</li>
          <li className="liste__puce">Assistance au démarrage</li>
        </div>
      </div>
      <p className="t6">
        <a className="t6__lien" href="https://www.cgi.fr/fr-fr/secteur-public/grand-angle" target="_blank">C.G.I.</a>
        <span> - CONSEILS ET SERVICES NUMERIQUE - BORDEAUX</span>
      </p>
    </div>













  </div>


);

export default Experience;
