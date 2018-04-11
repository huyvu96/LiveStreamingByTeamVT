import {USER_LOADING,USER_LOADING_SUCCESS,USER_LOADING_FAIL} from './nameAction'
import GetData from '../../Database/getData';

export function userLoading(){
    return {type: USER_LOADING}
}
export function userLoadingSuccess(inforUser){
    return {type:USER_LOADING_SUCCESS, inforUser }
}
export function userLoadingFail(){
    return {type: USER_LOADING_FAIL}
}

