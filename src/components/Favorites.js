import React, { Component } from 'react'

class Favorites extends Component {
  render() {
    const { favorites } = this.props

    if (favorites.length === 0) {
      return null
    }

    return (
      <>
        <h3>Favorites</h3>
        <ul className="list-group mb-5">
          {favorites.map(favorite => (
            <li key={`${favorite.fullName}-${favorite.id}`} className="list-group-item">
              {favorite.fullName}
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default Favorites