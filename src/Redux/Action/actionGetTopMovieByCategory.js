import {
    GET_TOP_MOVIE_FETCHING,
    GET_TOP_MOVIE_SUCCESS,
    GET_TOP_MOVIE_FAIL
  } from './nameAction'
  import {baseURL} from '../../Database/getAPI';
  import axios from 'axios';
  
  
  export function dataFetching() {
         return {
              type: GET_TOP_MOVIE_FETCHING
        };
  }
  export function dataFetchingSuccess(payload) {
        return {
              type: GET_TOP_MOVIE_SUCCESS,
              payload,
          }
  }
  export function dataFetchingFail() {
          return {
              type: GET_TOP_MOVIE_FAIL,
          }
  }
  export function fetchingDataTopMovieByCategory(category) {
    return (dispatch) => {
        var url = baseURL + '/topcategory';
        dispatch(dataFetching());
        axios.get(url, {
            params: {
                category: category
            },
        }).then(data => {dispatch(dataFetchingSuccess(data.data)), console.log(data)})
        .catch(e => dispatch(dataFetchingFail()))
    }
}