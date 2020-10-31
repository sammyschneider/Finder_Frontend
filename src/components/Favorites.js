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
                      <div className="fav-buttons">
                        <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#fullHeightModalRight">
                        More
                        </button>
                        <div className="modal fade center modal-center" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                        aria-hidden="true">
                          <div className="modal-dialog modal-full-height modal-right" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title w-100" id="myModalLabel">{fav.key.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <h6>{fav.key.location.address1}</h6>
                                <h6>{fav.key.display_phone}</h6>
                                <h6>Rating: {fav.key.rating}</h6>
                                <h6>{fav.key.price}</h6>
                                <h6><a href={fav.key.url}>Menu & Reviews</a></h6>
                              </div>
                              <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-outline-info" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
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
