import { ADDING } from '../action/nameAction';
const initialState = {isAdding: false}

export default function toggleIsAddingReducer(state = initialState, action) {
  switch (action.type) {
    case ADDING:
    console.log('isAdding', state.isAdding);
    return {isAdding: !state.isAdding}
    default:
      return state
  }
}