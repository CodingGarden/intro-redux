import { SET_NEW_CAMPSITE_NAME, ADD_CAMPSITE } from '../actions/campsites';

const initialState = {
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
  }],
  newCampForm: {
    name: '',
    location: '',
    description: ''
  }
};

export default function campsites(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case SET_NEW_CAMPSITE_NAME:
      newState = {...state};
      newState.newCampForm = {...newState.newCampForm};
      newState.newCampForm.name = action.name;
      return newState;
    case ADD_CAMPSITE:
      newState = {...state};
      newState.campsites = newState.campsites.concat(action.campsite);
      return newState;
    default:
      return state;
  }
}
