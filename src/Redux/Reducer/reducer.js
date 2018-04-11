import { combineReducers } from 'redux'
import userLoginReducer from './userLoginReducer'

const rootReducer = combineReducers ({
    inforUser : userLoginReducer
})
export default rootReducer
