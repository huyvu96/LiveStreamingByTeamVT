import {  GET_TOP_MOVIE_FETCHING,
    GET_TOP_MOVIE_SUCCESS,
    GET_TOP_MOVIE_FAIL } from '../Action/nameAction';

const defaultState= {
    error: false,
    isLoading: false,
    dataTop: [],
}

export default function getTopMovieReducer(state = defaultState, action){
    switch(action.type){
        case GET_TOP_MOVIE_FETCHING:
        return {...state, isLoading: true, dataTop: []};
        case GET_TOP_MOVIE_SUCCESS:
        return {...state, dataTop: action.payload, isLoading: false,};
        case GET_TOP_MOVIE_FAIL:
        return {...state, error: true};
        default: return state;
    }
}