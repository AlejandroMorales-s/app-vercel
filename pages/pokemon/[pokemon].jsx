import React from 'react'

export async function getStaticPaths(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
    const data = await res.json()

    const pokemonIDs = data.results.map(pokemon => ({
        params:{
            pokemon:pokemon.name // "pokemon" es el mismo nombre del archivo, tiene que ser asi, tener el mismo nombre
        }
    }))

    return{
        paths:pokemonIDs,
        fallback:false  // fallback:false, si no se encuentra el path, arroja 404
    } 
}

export async function getStaticProps({params}){
    const {pokemon} = params
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await res.json()

    return {
        props:{
            data:data
        }
    }
}

export default function PokemonDetails({data}) {
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}
