import React, { Component } from 'react';

class CampsiteForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addCampsite = this.addCampsite.bind(this);
  }

  handleChange(e) {
    if(e.target.id == 'name') {
      this.props.onSetNewCampsiteName(e.target.value);
    }
  }

  addCampsite(e) {
    e.preventDefault();
    this.props.onAddCampsite(this.props.newCampForm);
  }

  render() {
    const {name, location, description} = this.props.newCampForm;
    return (
      <div>
        <form className="form" onSubmit={this.addCampsite}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={this.handleChange} value={name} type="text" className="form-control" id="name" placeholder="" required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input onChange={this.handleChange} value={location} type="text" className="form-control" id="location" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input onChange={this.handleChange} value={description} type="text" className="form-control" id="description" placeholder="" />
          </div>
          <button type="submit" className="btn btn-default">
            Add Campsite
          </button>
        </form>
      </div>
    );
  }
}

export default CampsiteForm;
