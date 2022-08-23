import React from 'react'
import Link from 'next/link'

//* Función para generación estática, desde el servidor
export async function getStaticProps(){
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
    const data = await res.json()
    return{
        props:{
            data: data.results
        }
    } 
}

export default function Pokemon({data}) {
    return (
        <div>
            <h1>Pokemon</h1>
            {data?.map(pokemon => {
                return <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
                    <article>
                        <p>{pokemon.name}</p>
                    </article>
                </Link> 
            })}
        </div>
    )
}
