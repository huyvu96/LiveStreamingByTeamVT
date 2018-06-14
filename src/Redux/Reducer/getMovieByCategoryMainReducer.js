import {GET_MOVIES_PHIMLE_FETCHING_MAIN,
    GET_MOVIES_PHIMLE_SUCCESS_MAIN,
    GET_MOVIES_PHIMLE_FAIL_MAIN,
    GET_MOVIES_PHIMBO_FETCHING_MAIN,
    GET_MOVIES_PHIMBO_SUCCESS_MAIN,
    GET_MOVIES_PHIMBO_FAIL_MAIN,
    GET_MOVIES_TVSHOW_FETCHING_MAIN,
    GET_MOVIES_TVSHOW_SUCCESS_MAIN,
    GET_MOVIES_TVSHOW_FAIL_MAIN, } from '../Action/nameAction';

const defaultState= {
    errorPhimLeMain: false,
    errorPhimBoMain: false,
    errorTVShowMain: false,
    isLoadingPhimLeMain: false,
    isLoadingPhimBoMain: false,
    isLoadingTVShowMain: false,
    dataPhimLeMain: [],
    dataPhimBoMain: [],
    dataTVShowMain: [],
}

export default function getMovieByCategoryMainReducer(state = defaultState, action){
    switch(action.type){
        case GET_MOVIES_PHIMLE_FETCHING_MAIN:
        return {...state, isLoadingPhimLeMain: true, dataPhimLeMain: null};
        case GET_MOVIES_PHIMLE_SUCCESS_MAIN:
        return {...state, dataPhimLeMain: action.payload, isLoadingPhimLeMain: false,};
        case GET_MOVIES_PHIMLE_FAIL_MAIN:
        return {...state, errorPhimLeMain: true};

        case GET_MOVIES_PHIMBO_FETCHING_MAIN:
        return {...state, isLoadingPhimBoMain: true, dataPhimBoMain: null};
        case GET_MOVIES_PHIMBO_SUCCESS_MAIN:
        return {...state, dataPhimBoMain: action.payload, isLoadingPhimBoMain: false,};
        case GET_MOVIES_PHIMBO_FAIL_MAIN:
        return {...state, errorPhimBoMain: true};

        case GET_MOVIES_TVSHOW_FETCHING_MAIN:
        return {...state, isLoadingTVShowMain: true, dataTVShowMain: null};
        case GET_MOVIES_TVSHOW_SUCCESS_MAIN:
        return {...state, dataTVShowMain: action.payload, isLoadingTVShowMain: false,};
        case GET_MOVIES_TVSHOW_FAIL_MAIN:
        return {...state, errorTVShowMain: true};
        default: return state;
    }
}