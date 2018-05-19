import API from './API';

const SEARCH_TERM_CHANGED = 'SEARCH_TERM_CHANGED';

const initialState = {
  title: 'React Image Search',
  searchTerm: '',
  loading: false,
  images: []
};

export const actions = {
  searchTermChanged(searchTerm) {
    return {
      type: SEARCH_TERM_CHANGED,
      searchTerm
    };
  },
  getImages(searchTerm) {
    return {
      type: 'IMAGES',
      payload: API.search(searchTerm)
    };
  }
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_TERM_CHANGED: {
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    }
    case 'IMAGES_PENDING': {
      return {
        ...state,
        images: [],
        loading: true
      }
    }
    case 'IMAGES_FULFILLED': {
      return {
        ...state,
        loading: false,
        images: action.payload
      };
    }
    default:
      return state;
  }
}