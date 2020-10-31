import React from 'react'

class Landing extends React.Component {

  render() {
    return (


        <div className='landing'>
              <div className="col-md-12 mb-4 white-text text-center landing-padding">
                <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s"><strong>F'nder</strong></h1>
                <hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s"/>
                <h5 className=" mb-4 white-text wow fadeInDown" data-wow-delay="0.4s"><strong>Find what you are hungry for!</strong></h5>
                <h6 className=" mb-4 white-text wow fadeInDown" data-wow-delay="0.4s">Start swiping now!</h6>
                <a onClick={this.props.showApp} className="btn btn-outline-white wow fadeInDown" data-wow-delay="0.4s">Find food!</a>

              </div>


        </div>




    )
  }
}

export default Landing
