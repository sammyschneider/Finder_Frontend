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


    <div className="fav-cards">

         {this.state.favorites.map((fav) => {
           console.log("logging the array to be mapped over", fav, this.state.favorites);
          return (




                  <div className="card h-100 card-2">
                    <div className="view overlay">
                      <img className="card-img-top fav-img" src={fav.image_url}
                        alt="Card image cap"/>
                      <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <div className="card-body text-center">
                      <h4 className="card-title">{fav.name}</h4>
                      <p className="card-text">{fav.categories[0].title}</p>
                      <div className="fav-buttons">
                        <button type="button" className="btn btn-outline-blue btn-md">Read more</button>
                        <button type="button" className="btn btn-outline-red btn-md">Remove</button>
                      </div>
                    </div>
                  </div>



          )
        })}


      </div>

    )
  }
}

export default Favorites
