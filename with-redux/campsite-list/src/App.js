import React, { Component } from 'react';

import Campsites from './containers/Campsites';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="center">Campsite List</h1>
        </header>
        <main className="container">
          <Campsites></Campsites>
        </main>
      </div>
    );
  }
}

export default App;
