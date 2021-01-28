const axios = require('axios');
// Axios variable

axios('https://pokeapi.co/api/v2/pokemon/eevee')
// Fetch this URL
    .then(function (response) {
        // Examine data
        const pokemon = response.data;

        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
 // Pulls data and returns pokemon name chosen and its ID according to the URL
    .catch(function (error) {
        // handle error
        console.log("Error: " + error);
    });