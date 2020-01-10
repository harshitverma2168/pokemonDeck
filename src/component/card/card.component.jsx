import React from 'react'
import './card.styles.css'
export const Card = (props) => (
    <div className='card-container'>
        {/* <img alt="pokemon" src={`https://robohash.org/${props.pokemon.id}?set=set2`} /> */}
        <img alt="pokemon" className='image' src={`https://img.pokemondb.net/artwork/${props.pokemon.name}.jpg`} />
        <h1 className='txt'>{props.pokemon.name}</h1>
        <p>{props.pokemon.generation}</p>
        </div>
);
