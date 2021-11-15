import React, { Component } from 'react'

class Character extends Component {
  render() {
    const { name, title, image, isFavorite, onClick } = this.props

    return (
      <div className={`col-4 mb-5 ${isFavorite ? 'is-favorite' : ''}`}>
        <div className="img-container rounded mb-3" style={{ backgroundImage: `url('${image}')` }}/>
        <h4>{name}</h4>
        <h5 className="mb-3">{title}</h5>
        <button onClick={onClick} className="btn btn-outline-danger">
          <i className="bi bi-heart-fill me-2"></i>
          Add to favorites
        </button>
      </div>
    )
  }
}

export default Character
