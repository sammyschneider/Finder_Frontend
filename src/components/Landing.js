import React from 'react'

class Landing extends React.Component {

  render() {
    return (


        <div className='landing'>
              <div className="col-md-12 mb-4 landing-color text-center landing-padding">
                <h1 className="h1-reponsive landing-color text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInDown" data-wow-delay="0.3s">F'nder</h1>
                <hr className="hr-light my-4 wow fadeInDown" data-wow-delay="0.4s"/>
                <h4 className=" mb-4 landing-color wow fadeInDown" data-wow-delay="0.4s"><strong>Find what you are hungry for!</strong></h4>
                <h4 className=" mb-4 landing-color wow fadeInDown" data-wow-delay="0.4s">Start swiping now!</h4>
                <a onClick={this.props.showApp} className="btn landing-btn wow fadeInDown" data-wow-delay="0.4s">Find food!</a>

              </div>
        </div>




    )
  }
}

export default Landing
