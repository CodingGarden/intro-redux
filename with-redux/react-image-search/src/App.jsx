import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from './store';

class App extends Component {
  formSubmitted(event) {
    event.preventDefault();
    this.props.onGetImages(this.props.searchTerm);
  }

  render() {
    const { title, searchTerm, loading, images } = this.props;

    return (
      <div>
        <h1>{title}</h1>
          <form onSubmit={(event) => this.formSubmitted(event)}>
            <label htmlFor="searchTerm">Search Term</label>
            <input
              onChange={(event) => this.props.onSearchTermChanged(event.target.value)}
              value={searchTerm}
              className="u-full-width"
              type="text"
              id="searchTerm"
              name="searchTerm" />
            <button type="submit">Search</button>
          </form>
          {loading ? <img alt="Loading..." src="https://i.imgur.com/LVHmLnb.gif" /> : ''}
          <section className="images">
            {images.map(image => {
              return <img key={image.id} alt={image.description} src={image.image_url[0]} />
            })}
          </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.title,
    searchTerm: state.searchTerm,
    loading: state.loading,
    images: state.images
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchTermChanged(searchTerm) {
      dispatch(actions.searchTermChanged(searchTerm));
    },
    onGetImages(searchTerm) {
      dispatch(actions.getImages(searchTerm));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
