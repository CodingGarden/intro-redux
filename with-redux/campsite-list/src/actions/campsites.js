export const SET_NEW_CAMPSITE_NAME = 'SET_NEW_CAMPSITE_NAME';
export const ADD_CAMPSITE = 'ADD_CAMPSITE';

// name: '',
// location: '',
// description: ''

export const setNewCampsiteName = name => {
  return {
    type: SET_NEW_CAMPSITE_NAME,
    name
  }
}

export const addCampsite = campsite => {
  return {
    type: ADD_CAMPSITE,
    campsite
  }
}
