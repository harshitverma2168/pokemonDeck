import React from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SeacrhBox } from './component/search-box/searchbox.component';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      pokemon: [],
      searchFeild:''
    }
  }

  pokemonArray =  [
      {
        "id": 1,
        "name": "charizard",
        "generation": "Generation3"
      },
      {
        "id": 2,
        "name": "golem",
        "generation": "Generation1"
      },
      {
        "id": 3,
        "name": "snorlax",
        "generation": "Generation1"
      },
      {
        "id": 4,
        "name": "machop",
        "generation": "Generation2"
      },
      {
        "id": 5,
        "name": "geodude",
        "generation": "Generation1"
      },
      {
        "id": 6,
        "name": "bulbasaur",
        "generation": "Generation1"
      },
      {
        "id": 7,
        "name": "raichu",
        "generation": "Generation2"
      },
      {
        "id": 8,
        "name": "sandshrew",
        "generation": "Genertion1"
      },
      {
        "id": 9,
        "name": "pikachu",
        "generation": "Generation1"
      },
      {
        "id": 10,
        "name": "venusaur",
        "generation": "Generation3"
      },
      {
        "id": 11,
        "name": "ivysaur",
        "generation": "Generation2"
      },
      {
        "id": 12,
        "name": "charmander",
        "generation": "Generation1"
      },
      {
        "id": 13,
        "name": "charmeleon",
        "generation": "Generation2"
      },
      {
        "id": 14,
        "name": "squirtle",
        "generation": "Generation1"
      },
      {
        "id": 15,
        "name": "wartortle",
        "generation": "Generation2"
      },
      {
        "id": 16,
        "name": "blastoise",
        "generation": "Generation3"
      },
      {
        "id": 17,
        "name": "rattata",
        "generation": "Generation1"
      }
    ]
  
  componentDidMount() {
    axios.get('http://localhost:300/pokemon')
      .then(response => this.setState({ pokemon: response.data}))
      .catch(() => this.setState({pokemon:this.pokemonArray}));
      
  }



  render() {
    const { pokemon, searchFeild } = this.state
    const filteredPokemon = pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchFeild.toLowerCase()) || pokemon.generation.toLowerCase().includes(searchFeild.toLowerCase()))
    return (
      <div className="App">
        <div><img className="pokeText" alt='pokemon' src={`https://miro.medium.com/max/1920/1*UNMAo8su_wbOENW8cjcEiw.png`}></img></div>
        <SeacrhBox placeholder="search pokemon" changeHandler={(e) => this.setState({ searchFeild: e.target.value })}></SeacrhBox>
        {/* <input type="text" placeholder="search pokemon" onChange={(e) => this.setState({searchFeild:e.target.value})}></input> */}
        <CardList pokemon={filteredPokemon}></CardList>
      </div>
    );
  }
}
export default App;
