import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tempReducer from './reducer/tempReducer';

const store = createStore(tempReducer, applyMiddleware(thunk))
export default store;