import React from 'react'


class Card extends React.Component {
  state = {
    data: [],
    currentID: ''
  }

  render = () => {
    return (
      <div card-fav>
      {
        this.props.data.map((food) => {
          return (
            <div>
            {this.props.id===food.id ? <div className="card card-cascade wider food-card card-first">

                <div className="view view-cascade overlay">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src= {food.image_url} className="front-card-image" alt="Avatar"/>
                      </div>
                      <div className="flip-card-back card-back-color">
                        <h1>{food.name}</h1>
                        <p>Address: {food.location.address1}</p>
                        <p>Phone: {food.phone}</p>
                        <p>Price: {food.price}</p>
                        <a href={food.url}>Menu/Reviews</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body card-body-cascade text-center pb-0">
                  <h4 className="card-title"><strong>{food.name}</strong></h4>
                  <h5 className=" pb-2">Rating: {food.rating}</h5>
                  <p className="paragraph-color">{food.categories[0].title} </p>
                    <div className="card-footer text-muted card-footer-color">
                      <button onClick={this.props.changeID} className='btn btn-outline-default waves-effect'><i className="fas fa-angle-double-left"></i></button>
                      <button onClick={this.props.recordFavorites} className='btn btn-outline-default waves-effect'><i className="fas fa-angle-double-right"></i></button>
                    </div>
                </div>

            </div>: null}
            </div>
          )
        })
      }
    </div>
    )
  }
}

export default Card
