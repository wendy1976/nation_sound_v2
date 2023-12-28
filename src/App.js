
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  useEffect(() => {
    // Charger le bundle JavaScript de Bootstrap de manière asynchrone
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JavaScript chargé avec succès');
        // Vous pouvez effectuer des initialisations supplémentaires ici si nécessaire
      })
      .catch((error) => console.error('Erreur lors du chargement de Bootstrap JavaScript', error));
  }, []); // Assurez-vous que cette fonction useEffect s'exécute une seule fois lors du montage du composant

  return (
    // Utiliser un fragment pour envelopper le contenu JSX
    <>
      {/* Router pour permettre la navigation dans l'application */}
      <Router>
        {/* Le composant AppRoutes contient les routes définies */}
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
