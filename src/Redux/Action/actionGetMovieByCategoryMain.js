import {
    GET_MOVIES_PHIMLE_FETCHING_MAIN,
    GET_MOVIES_PHIMLE_SUCCESS_MAIN,
    GET_MOVIES_PHIMLE_FAIL_MAIN,
    GET_MOVIES_PHIMBO_FETCHING_MAIN,
    GET_MOVIES_PHIMBO_SUCCESS_MAIN,
    GET_MOVIES_PHIMBO_FAIL_MAIN,
    GET_MOVIES_TVSHOW_FETCHING_MAIN,
    GET_MOVIES_TVSHOW_SUCCESS_MAIN,
    GET_MOVIES_TVSHOW_FAIL_MAIN, 
  } from './nameAction'
  import {baseURL} from '../../Database/getAPI';
  import axios from 'axios';
  
  
  export function dataFetching(category) {
      switch(category){
          case 'Phim lẻ':
          return {
              type: GET_MOVIES_PHIMLE_FETCHING_MAIN
          };
          case 'Phim bộ':
          return {
              type: GET_MOVIES_PHIMBO_FETCHING_MAIN
          };
          case 'TV Show':
          return {
              type: GET_MOVIES_TVSHOW_FETCHING_MAIN
          };
          default: return null;
      }
  }
  export function dataFetchingSuccess(payload, category) {
      switch(category){
          case 'Phim lẻ':
          console.log("Main Category "+payload);
          return {
              type: GET_MOVIES_PHIMLE_SUCCESS_MAIN,
              payload
          }
          case 'Phim bộ':
          return {
              type: GET_MOVIES_PHIMBO_SUCCESS_MAIN,
              payload
          }
          case 'TV Show':
          return {
              type: GET_MOVIES_TVSHOW_SUCCESS_MAIN,
              payload
          }
          default: return null;
      }
  }
  export function dataFetchingFail(category) {
      switch(category){
          case 'Phim lẻ':
          return {
              type: GET_MOVIES_PHIMLE_FAIL_MAIN,
          }
          case 'Phim bộ':
          return {
              type: GET_MOVIES_PHIMBO_FAIL_MAIN,
          }
          case 'TV Show':
          return {
              type: GET_MOVIES_TVSHOW_FAIL_MAIN,
          }
          default: return null;
      }
  }
  
  export function fetchingDataMoviebyCategoryMain(page, category) {
      return (dispatch) => {
          var url = baseURL + '/category';
          dispatch(dataFetching(category));
          axios.get(url, {
             // headers: {'Authorization': 'SHV5VnU.vKmJ7RrenQhO1kM0rGR9e5P-4OS6kzeWO9dpich64vE'},
              params: {
                page: page,
                category: category
              },
          }).then(data => dispatch(dataFetchingSuccess(data.data,category)))
          .catch(e => dispatch(dataFetchingFail(category)))
      }
  }