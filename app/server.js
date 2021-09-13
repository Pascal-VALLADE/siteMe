// ********************************************************* //
// ** NE SERT QUE POUR LE DEPLOIEMENT SUR HEROKU *********** //
// ** faire un 'npm build' => génére le répertoire 'dist' ** //
// ** puis lancer le déploiemnt sur HEROKU ***************** //
// ** avec le fichier 'server.js' et 'Procfile' ************ //
// **  Heroku saura qu'il faut passer par 'server.js' ****** //
// ********************************************************* //

// create an express app
const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
}

const path = require('path');

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// start the server listening for requests
app.listen(process.env.PORT || 3000,
  () => console.log('Server is running...'));
