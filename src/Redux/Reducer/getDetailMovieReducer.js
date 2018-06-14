import {GET_DETAIL_MOVIE_FETCHING,
    GET_DETAIL_MOVIE_SUCCESS,
    GET_DETAIL_MOVIE_FAIL } from '../Action/nameAction';

const defaultState= {
    error: false,
    isLoading: false,
    dataDetail: null,
}

export default function getDetailMovieReducer(state = defaultState, action){
    switch(action.type){
        case GET_DETAIL_MOVIE_FETCHING:
        return {...state, isLoading: true, dataDetail: null};
        case GET_DETAIL_MOVIE_SUCCESS:
        return {...state, dataDetail: action.payload, isLoading: false,};
        case GET_DETAIL_MOVIE_FAIL:
        return {...state, error: true};
        default: return state;
    }
}