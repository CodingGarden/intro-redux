import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setNewCampsiteName, addCampsite } from '../actions/campsites';
import CampsiteForm from '../components/CampsiteForm';
import CampsiteList from '../components/CampsiteList';

class Campsites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CampsiteForm
          onSetNewCampsiteName={this.props.onSetNewCampsiteName}
          newCampForm={this.props.campsites.newCampForm}
          onAddCampsite={this.props.onAddCampsite}>
        </CampsiteForm>
        <br />
        <CampsiteList
          campsites={this.props.campsites.campsites}>
        </CampsiteList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campsites: state.campsites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSetNewCampsiteName: name => {
      dispatch(setNewCampsiteName(name))
    },
    onAddCampsite: campsite => {
      dispatch(addCampsite(campsite))
    }
  }
}

const connecter = connect(mapStateToProps, mapDispatchToProps);
Campsites = connecter(Campsites);

export default Campsites;
