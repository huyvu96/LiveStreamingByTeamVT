import { USER_CHANGE_STATE_ITEM} from '../Action/nameAction'
const initialState = null

export default function stateItemChange(state = initialState, action) {
  switch (action.type) {
    case USER_CHANGE_STATE_ITEM:
    //initialState.push(action.inforitemshop);
    state = action.stateItemChange
    console.log("Log Change", state)
    return state
    default:
      return state
  }
}