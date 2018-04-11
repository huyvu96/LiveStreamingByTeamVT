import {FETCH_START,FETCH_SUCCESS,FETCH_ERROR} from '../action/actionName';

const defaultState = {
    isLoading: false,
    isError: false,
    cityName: null,
    temp: null
}
export default function tempReducer(state=defaultState, action){
    switch(action.type){
        case FETCH_START:
        return {...state, isLoading: true};
        case FETCH_SUCCESS:
        return {...state, isLoading: false, cityName: action.cityName, temp: action.temp};
        case FETCH_ERROR:
        return {...state, isError: true};
        default: return state;
    }
}
