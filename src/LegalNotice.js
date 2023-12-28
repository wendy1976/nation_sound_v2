import React from 'react';
import Layout from './Layout';

const LegalNotice = () => {
  return (
    <Layout>
    <div className='mentions-legales-container'>
      <h1 className='pink text-center mentions-legales-title'>Mentions Légales</h1>

      <h2>Identité</h2>
      <p>
        <strong>Nom du site web :</strong> Nation Sound<br />
        <strong>Adresse du site :</strong> <a href="https://nationsound.fr">https://nation-sound.netlify.app/</a><br />
        <strong>Propriétaire :</strong> Caroline FERRU<br />
        <strong>Responsable de publication :</strong> <a href="mailto:caroline.ferru@free.fr">caroline.ferru@free.fr</a><br />
        <strong>Hébergement :</strong> NETLIFY
      </p>

      <p className='red'>
        <strong>Ce site a été créé pour un exercice de formation, les images, la musique sont libres de droits, et les concerts et artistes sont fictifs.</strong>
      </p>

      <h2>Conditions d’utilisation</h2>
      <p>
        L’utilisation du présent site implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.
      </p>

      <h2>Informations</h2>
      <p>
        Les informations et documents du site sont présentés à titre indicatif, sans de caractère exhaustif, et ne peuvent engager la responsabilité du propriétaire du site.<br />
        Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à l’accès au site.
      </p>

      <h2>Interactivité</h2>
      <p>
        Les utilisateurs du site peuvent y déposer du contenu, apparaissant sur le site dans des espaces dédiés (notamment via les commentaires). Le contenu déposé reste sous la responsabilité de leurs auteurs, qui en assument pleinement l’entière responsabilité juridique.<br />
        Le propriétaire du site se réserve néanmoins le droit de retirer sans préavis et sans justification tout contenu déposé par les utilisateurs qui ne satisferait pas à la charte déontologique du site ou à la législation en vigueur.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Sauf mention contraire, tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) restent la propriété exclusive de leurs auteurs, en ce qui concerne les droits de propriété intellectuelle ou les droits d’usage.<br />
        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l’auteur.<br />
        Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est considérée comme constitutive d’une contrefaçon et passible de poursuites.<br />
        <strong>Les marques, les noms d'artistes, les descriptions, toutes les informations et logos reproduits sur le site sont purement fictifs.</strong>
      </p>

      <h2>Liens</h2>
      <p>
        <strong>Liens sortants</strong><br />
        Le propriétaire du site décline toute responsabilité et n’est pas engagé par le référencement via des liens hypertextes, de ressources tierces présentes sur le réseau Internet, tant en ce qui concerne leur contenu que leur pertinence.<br />

        <strong>Liens entrants</strong><br />
        Le propriétaire du site autorise les liens hypertextes vers l’une des pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre et soient présentés de manière non équivoque afin d’éviter :<br />
        tout risque de confusion entre le site citant et le propriétaire du site<br />
        ainsi que toute présentation tendancieuse, ou contraire aux lois en vigueur.<br />
        Le propriétaire du site se réserve le droit de demander la suppression d’un lien s’il estime que le site source ne respecte pas les règles ainsi définies.
      </p>

      <h2>Confidentialité</h2>
      <p>
        Tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une preuve d’identité.<br />
        Le site ne recueille pas d’informations personnelles, et n’est pas assujetti à déclaration à la CNIL. (Remplacé par les disposition de la RGPD)<br />
        Politique de confidentialité : se référer à la page Politique de Confidentialité<br />
        Politique de cookies : se référer à la page Politique des Cookies
      </p>
    </div>
    </Layout>
  );
};

export default LegalNotice;