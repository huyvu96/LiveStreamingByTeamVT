import {
  GET_MOVIES_PHIMLE_FETCHING,
  GET_MOVIES_PHIMLE_SUCCESS,
  GET_MOVIES_PHIMLE_FAIL,
  GET_MOVIES_PHIMBO_FETCHING,
  GET_MOVIES_PHIMBO_SUCCESS,
  GET_MOVIES_PHIMBO_FAIL,
  GET_MOVIES_TVSHOW_FETCHING,
  GET_MOVIES_TVSHOW_SUCCESS,
  GET_MOVIES_TVSHOW_FAIL
} from './nameAction'
import {baseURL} from '../../Database/getAPI';
import axios from 'axios';


export function dataFetching(category) {
    switch(category){
        case 'Phim lẻ':
        return {
            type: GET_MOVIES_PHIMLE_FETCHING
        };
        case 'Phim bộ':
        return {
            type: GET_MOVIES_PHIMBO_FETCHING
        };
        case 'TV Show':
        return {
            type: GET_MOVIES_TVSHOW_FETCHING
        };
        default: return null;
    }
}
export function dataFetchingSuccess(payload, category) {
    switch(category){
        case 'Phim lẻ':
        console.log("Category cùi"+payload);
        return {
            type: GET_MOVIES_PHIMLE_SUCCESS,
            payload
        }
        case 'Phim bộ':
        return {
            type: GET_MOVIES_PHIMBO_SUCCESS,
            payload
        }
        case 'TV Show':
        return {
            type: GET_MOVIES_TVSHOW_SUCCESS,
            payload
        }
        default: return null;
    }
}
export function dataFetchingFail(category) {
    switch(category){
        case 'Phim lẻ':
        return {
            type: GET_MOVIES_PHIMLE_FAIL,
        }
        case 'Phim bộ':
        return {
            type: GET_MOVIES_PHIMBO_FAIL,
        }
        case 'TV Show':
        return {
            type: GET_MOVIES_TVSHOW_FAIL,
        }
        default: return null;
    }
}

export function fetchingDataMoviebyCategory(page, category) {
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