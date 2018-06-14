import {
    GET_DETAIL_MOVIE_FETCHING,
    GET_DETAIL_MOVIE_SUCCESS,
    GET_DETAIL_MOVIE_FAIL
  } from './nameAction'
  import {baseURL} from '../../Database/getAPI';
  import axios from 'axios';
  
  
  export function dataFetching() {
         return {
              type: GET_DETAIL_MOVIE_FETCHING
        };
  }
  export function dataFetchingSuccess(payload) {
        return {
              type: GET_DETAIL_MOVIE_SUCCESS,
              payload,
          }
  }
  export function dataFetchingFail() {
          return {
              type: GET_DETAIL_MOVIE_FAIL,
          }
  }
  export function fetchingDataDetailMovieByID(id) {
    return (dispatch) => {
        var url = baseURL + '/detail';
        dispatch(dataFetching());
        axios.get(url, {
            params: {
              id: id
            },
        }).then(data => {dispatch(dataFetchingSuccess(data.data)), console.log(data)})
        .catch(e => dispatch(dataFetchingFail()))
    }
}