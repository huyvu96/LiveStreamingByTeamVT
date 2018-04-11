import {FETCH_START,FETCH_SUCCESS,FETCH_ERROR} from '../action/actionName';
import getTemp from '../getTemp';

export function Fetch_Start(){
    return {type : FETCH_START}
}
export function Fetch_Success(cityName, temp){
    return {type : FETCH_SUCCESS, cityName, temp}
}
export function Fetch_Error(){
    return {type : FETCH_ERROR}
}

export function fetchDataThunk(cityname){
     return dispatch =>{
        dispatch(Fetch_Start());
        getTemp(cityname)
        .then(temp =>  dispatch(Fetch_Success(cityname, temp)))
        .catch(()=> dispatch(Fetch_Error()));
    };
}