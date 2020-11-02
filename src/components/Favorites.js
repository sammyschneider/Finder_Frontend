import React from 'react'
import axios from 'axios'

class Favorites extends React.Component {
  state = {
    favorites : this.props.favoritesData,
    food_id: ''
  }
  deleteFavorite = (event) => {
    axios.delete(`https://fnder.herokuapp.com/api/foods/${event.target.value}`).then(res => {
      this.props.yelpRESTById();
    })
  }

  render() {
    return (
<div>
<h1 className='search-div'>Favorites</h1>
    <div className="fav-cards">
         {this.state.favorites.map((fav) => {
           console.log("logging the array to be mapped over", fav, this.state.favorites);
          return (


                              <div className="card h-100 card-2">
                                <div className="view overlay">
                                  <img className="card-img-top fav-img" src={fav.key.image_url}
                                    alt="Card image cap"/>
                                  <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                  </a>
                                </div>
                                <div className="card-body text-center">
                                  <h4 className="card-title">{fav.key.name}</h4>
                                  <p className="card-text">{fav.key.categories[0].title}</p>
                                  <p className='card-text'>{fav.key.name}</p>
                                  <p className='card-text'>Rating: {fav.key.rating}</p>
                                  <p className='card-text'><a href={`tel: ${fav.key.phone}`}> {fav.key.phone}</a></p>
                                  <p className='card-text'><a href={fav.key.url}>Menu & Reviews</a></p>
                                  <div className="fav-buttons">
                                    <button type="button" value={fav.id} onClick={this.deleteFavorite} className="btn btn-outline-red btn-md">Remove</button>
                                  </div>




                                  </div>
                                </div>






          )
        })}


      </div>
</div>
    )
  }
}

export default Favorites
