import { USER_CHANGE_STATE_ITEM, } from './nameAction';
export function itemStateChange(infouser) {
  return {
    type: USER_CHANGE_STATE_ITEM,
    stateItemChange
  };
}
