import React from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SeacrhBox } from './component/search-box/searchbox.component';
class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      pokemon: [],
      searchFeild:''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ pokemon: users }));
  }



  render() {
    const { pokemon, searchFeild } = this.state
    const filteredPokemon = pokemon.filter(pokemon=>pokemon.name.toLowerCase().includes(searchFeild.toLowerCase()))
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
