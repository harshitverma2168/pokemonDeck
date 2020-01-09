import React from 'react'
import './card.styles.css'
export const Card = (props) => (
    <div className='card-container'>
        <img alt="pokemon" src={`https://robohash.org/${props.pokemon.id}?set=set2`}/>
        <h1>{props.pokemon.name}</h1>
        <h3>{props.pokemon.email}</h3>
        </div>
);
