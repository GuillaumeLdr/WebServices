const express = require('express');
const route = require('./route');
const app = express();

//Affichage du front
app.use(express.static('front'));

//Récupérer les inforations des cartes Yu-Gi-Oh!
app.get('/cartes', route.getLesCartes);
app.get('/carte', route.getCarte);

app.listen(1997, () => {
    console.log("started");
});