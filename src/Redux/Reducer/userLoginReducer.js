import {USER_LOGOUT,USER_LOADING_SUCCESS,USER_LOADING_FAIL } from '../Action/nameAction';

const defaultState= {
    isLoading: false,
    inforUser: null,
}

export default function userLoginReducer(state = defaultState, action){
    switch(action.type){
        case USER_LOGOUT:
        return {...state, isLoading: false, inforUser: null};
        case USER_LOADING_SUCCESS:
        return {...state, inforUser: action.inforUser, isLoading: true,};
        case USER_LOADING_FAIL:
        return {...state, isLoading: false};
        default: return state;
    }
}