import React from 'react'

class Favorites extends React.Component {
  render() {
    return (
      <div>
         <button onClick = {this.props.requestForFavorites}>click</button>
         <button onClick = {this.props.something}>click me</button>
      </div>
    )
  }
}

export default Favorites
