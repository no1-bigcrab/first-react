import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <>
        { pokemon.map(poke =>(
            <div key={poke}>
                {poke}
            </div>
        ))}
    </>
  )
}
