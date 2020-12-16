import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    arrayOfPokemon: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/pokemon')
      .then(resp => resp.json())
      .then(arrayOfPokemon => this.setState(
        { arrayOfPokemon: arrayOfPokemon }
      ))
  }

  createFormHandler = (pokeObj) => {
    console.log("In PokePage", pokeObj)
    fetch('http://localhost:4000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokeObj),
    })
      .then(response => response.json())
      .then(newPokeObj => this.setState(
        { arrayOfPokemon: [newPokeObj, ...this.state.arrayOfPokemon] }
      ))

  }

  searchChangeHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.createFormHandler} />
        <br />
        <Search searchTerm={this.state.searchTerm} changeHandler={this.searchChangeHandler} />
        <br />
        <PokemonCollection arrayOfPokemon={this.state.arrayOfPokemon} searchTerm={this.state.searchTerm} />
      </Container>
    )
  }
}

export default PokemonPage
