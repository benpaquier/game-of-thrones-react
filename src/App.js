import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import Character from './components/Character'
import Favorites from './components/Favorites'

class App extends Component {
  constructor() {
    super()

    // state initial
    this.state = {
      characters: [],
      favorites: []
    }

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(result => {
        this.setState({ characters: result })
      })
  }

  handleFavoriteClick(character) {
    this.setState({
      favorites: [...this.state.favorites, character]
    })
  }

  render() {
    const { characters, favorites } = this.state

    return (
      <div className="container py-5">
        <h1 className="mb-5">Game of thrones</h1>
        
        <Favorites favorites={favorites} />

        <div className="row">
          {characters.map(character => (
            <Character
              key={`${character.fullName}-${character.id}`}
              name={character.fullName}
              title={character.title}
              image={character.imageUrl}
              onClick={() => this.handleFavoriteClick(character)}
              isFavorite={favorites.some(favorite => favorite.id === character.id)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App