import {  FILTER_SHOW_ALL,
    FILTER_MEMORIED,
    FILTER_NEED_PRACTICE,} from '../action/nameAction';
const defaultState = {filterStatus: 'SHOW_ALL'}

export default function fillterStatusReducer(state = defaultState, action){
    switch(action.type){
        case FILTER_SHOW_ALL:
        return {...state, filterStatus: 'SHOW_ALL'};
        case FILTER_MEMORIED:
        return {...state, filterStatus: 'MEMORIED'};
        case FILTER_NEED_PRACTICE:
        return {...state, filterStatus: 'NEED_PRACTICE'};
        default: return state;
    }
}