import React from 'react'

class Favorites extends React.Component {
  state = {
    favorites : this.props.favoritesData,
  }
  test = () => {
    console.log(this.state.favorites);
  }
  render() {
    return (
    <div>
    <button onClick={this.test}>hwllo</button>

         {this.state.favorites.map((fav) => {
           console.log("logging the array to be mapped over", fav, this.state.favorites);
          return (
            <div>
            <h1>{fav.name}</h1>

            </div>
          )
        })}


      </div>
    )
  }
}

export default Favorites
