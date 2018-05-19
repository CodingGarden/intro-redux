import React, { Component } from 'react';

import CampsiteForm from './CampsiteForm';
import CampsiteList from './CampsiteList';

class Campsites extends Component {
  constructor(props) {
    super(props);

    this.onAddCampsite = this.onAddCampsite.bind(this);

    this.state = {
      campsites: [{
        name: 'Bear Creek Lake Park',
        location: 'Morrison',
        description: 'Wonderful view of the home depot.'
      }, {
        name: 'Lost Lake',
        location: 'Nederland',
        description: 'Can\'t find'
      }, {
        name: 'Lake Powell',
        location: 'Utah',
        description: 'A big lake.'
      }]
    }
  }

  onAddCampsite(campsite) {
    this.setState({
      campsites: this.state.campsites.concat(campsite)
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="center">Campsite List</h1>
        </header>
        <main className="container">
          <CampsiteForm
            onAddCampsite={this.onAddCampsite}>
          </CampsiteForm>
          <br />
          <CampsiteList
            campsites={this.state.campsites}>
          </CampsiteList>
        </main>
      </div>
    );
  }
}

export default Campsites;
