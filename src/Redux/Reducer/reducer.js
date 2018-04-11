import { combineReducers } from 'redux'
import userLoginReducer from './userLoginReducer'

const rootReducer = combineReducers ({
    infoUser : userLoginReducer
})
export default rootReducer
