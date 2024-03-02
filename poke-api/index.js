//importa el paquete express
const express = require('express')

//invocara a la funcion express, crea una app express
const app = express()

//almacena el puerto en el que va a correr
const port = 3000

//poneme a correr la app express, en el localhost en el puerto 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//permisos para que entre un usuario externo a mi localhost
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});



const allPokemon = [
    {
        id:1,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png',
        nombre: "bullbasaur",
        tipo: "planta"
    },
    {
        id:2,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png',
        nombre: "charmander",
        tipo: "fuego"
    },
    {
        id:3,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png',
        nombre: "squirtle",
        tipo: "agua"
    },
    {
        id:4,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png',
        nombre: "pikachu",
        tipo: "electrico"
    },
    {
        id:5,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png',
        nombre: "psiduck",
        tipo: "psyquico"
    }

]

//Cuando llegue una request a localhost:3000 
app.get('/pokemon/:id', (req, res) => {
    // console.log(req.params)
    const pokemon = getPokemonById(req.params.id)
    res.send(pokemon)
})


app.get('/pokemon/', (req, res) => {
    // console.log(req.params)
    res.send(allPokemon)
})



//busca pokemon por ID
function getPokemonById(id){
    return allPokemon.find(pokemon => pokemon.id == id)
}