import {GET_MOVIES_PHIMLE_FETCHING,
    GET_MOVIES_PHIMLE_SUCCESS,
    GET_MOVIES_PHIMLE_FAIL,
    GET_MOVIES_PHIMBO_FETCHING,
    GET_MOVIES_PHIMBO_SUCCESS,
    GET_MOVIES_PHIMBO_FAIL,
    GET_MOVIES_TVSHOW_FETCHING,
    GET_MOVIES_TVSHOW_SUCCESS,
    GET_MOVIES_TVSHOW_FAIL } from '../Action/nameAction';

const defaultState= {
    errorPhimLe: false,
    errorPhimBo: false,
    errorTVShow: false,
    isLoadingPhimLe: false,
    isLoadingPhimBo: false,
    isLoadingTVShow: false,
    dataPhimLe: [],
    dataPhimBo: [],
    dataTVShow: [],
}

export default function getMovieByCategoryReducer(state = defaultState, action){
    switch(action.type){
        case GET_MOVIES_PHIMLE_FETCHING:
        return {...state, isLoadingPhimLe: true, dataPhimLe: null};
        case GET_MOVIES_PHIMLE_SUCCESS:
        return {...state, dataPhimLe: action.payload, isLoadingPhimLe: false,};
        case GET_MOVIES_PHIMLE_FAIL:
        return {...state, errorPhimLe: true};

        case GET_MOVIES_PHIMBO_FETCHING:
        return {...state, isLoadingPhimBo: true, dataPhimBo: null};
        case GET_MOVIES_PHIMBO_SUCCESS:
        return {...state, dataPhimBo: action.payload, isLoadingPhimBo: false,};
        case GET_MOVIES_PHIMBO_FAIL:
        return {...state, errorPhimBo: true};

        case GET_MOVIES_TVSHOW_FETCHING:
        return {...state, isLoadingTVShow: true, dataTVShow: null};
        case GET_MOVIES_TVSHOW_SUCCESS:
        return {...state, dataTVShow: action.payload, isLoadingTVShow: false,};
        case GET_MOVIES_TVSHOW_FAIL:
        return {...state, errorTVShow: true};
        default: return state;
    }
}