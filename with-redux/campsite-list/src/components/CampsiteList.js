import React, { Component } from 'react';

class CampsiteList extends Component {
  render() {
    return (
      <div>
        {this.props.campsites.map((campsite, i) => {
          return (<div key={i} className="panel panel-default">
            <div className="panel-heading">{campsite.name}</div>
            <div className="panel-body">
              {campsite.description}
              <small>{campsite.location}</small>
            </div>
          </div>)
        })}
      </div>
    );
  }
}

export default CampsiteList;
