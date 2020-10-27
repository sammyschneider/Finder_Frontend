import React from 'react'

class Form extends React.Component {
  render() {
    return (
        <div className="card search-width">
            <div className="card-body px-lg-5">
                <form className="text-center" onSubmit={this.props.submit}>
                    <p>Fill out the form below to make your results more specific</p>
                    <div className="md-form mt-3 label">
                        <input onKeyUp={this.props.updateLocation} type="text" className="form-control"/>
                        <label className="label">Location (City/Zip/Address/State)</label>
                    </div>
                    <div className="md-form" id='label'>
                        <input onKeyUp={this.props.updateRadius} type="number" className="form-control" min='0' max='25' step='5'/>
                        <label >Distance (Miles: max=25)</label>
                    </div>
                    <div className="md-form">
                        <input onKeyUp={this.props.updateTerm} type="text" className="form-control"/>
                        <label>Type (Tacos, Coffee, Italian, etc.)</label>
                    </div>
                    <button className="btn btn-outline-default btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Start Swiping!</button>
                </form>
            </div>
        </div>
    )
  }
}

export default Form
