import {USER_LOADING,USER_LOADING_SUCCESS,USER_LOADING_FAIL } from '../Action/nameAction';

const defaultState= {
    isLoading: false,
    isFail: false,
    inforUser: null
}

export default function userLoginReducer(state = defaultState, action){
    switch(action.type){
        case USER_LOADING:
        return {...state, isLoading: true};
        case USER_LOADING_SUCCESS:
        return {...state, inforUser: action.inforUser};
        case USER_LOADING_FAIL:
        return {...state, isFail: true};
        default: return state;
    }
}