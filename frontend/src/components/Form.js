import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <div className='background-everything'>
      <div className='form-background'>
        <div className="card search-width">
            <div className="card-body px-lg-5 form-width">
                <form className="text-center" onSubmit={this.props.submit}>
                    <h5>Find what you are craving</h5>
                    <div className="md-form mt-3 label">
                        <input onKeyUp={this.props.updateLocation} type="text" className="form-control"/>
                        <label className="label">Where are you?</label>
                    </div>
                    <div className="md-form" id='label'>
                        <input onKeyUp={this.props.updateRadius} type="number" className="form-control" min='0' max='25' step='1'/>
                        <label>Search radius? (max = 25 miles)</label>
                    </div>
                    <div className="md-form">
                        <input onKeyUp={this.props.updateTerm} type="text" className="form-control"/>
                        <label>Food type? (Leave blank for random)</label>
                    </div>
                    <button className="btn btn-outline-default btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Start Swiping!</button>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
  }
}

export default Form
