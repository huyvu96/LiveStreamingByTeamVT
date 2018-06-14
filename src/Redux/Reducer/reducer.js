import { combineReducers } from 'redux';
import userLoginReducer from './userLoginReducer';
import getMovieByCategoryReducer from './getMovieByCategoryReducer';
import getDetailMovieReducer from './getDetailMovieReducer';
import getTopMovieReducer from './getTopMovieReducer';
import getMovieByCategoryMainReducer from './getMovieByCategoryMainReducer'
const rootReducer = combineReducers ({
    inforUser : userLoginReducer,
    getMovieByCategory: getMovieByCategoryReducer,
    getDetailMovie: getDetailMovieReducer,
    getTopMovie:getTopMovieReducer,
    getMovieByCategoryMain: getMovieByCategoryMainReducer
})
export default rootReducer
