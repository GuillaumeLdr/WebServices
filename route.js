const cartes = require('./cartes.json');

//Récupérer toutes les cartes
const getLesCartes = function(req, res){
    var response =[];
    
    for(let i = 0; i < cartes.length; i++){
        response.push(cartes[i]);
    }
        res.header("Content-Type", "text/json");
        res.send(response);
};

//Récupérer une carte
const getCarte = function(req, res){
    let nom = req.param('nom');

    var response = [];

    for(let i = 0; i < cartes.length; i++){
        if(cartes[i].nom == nom){
            response.push(cartes[i]);
        }
    }
    res.header("Content-Type", "text/json");
    res.send(response);
};

module.exports = {getLesCartes, getCarte};