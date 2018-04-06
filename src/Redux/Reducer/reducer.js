import { combineReducers } from 'redux'
import infouserReducer from './inforUser'
import infoItemShopReducer from './inforItemShop'
import stateItemChange from './stateItemChange';
const rootReducer = combineReducers ({
    infouser : infouserReducer,
    inforitemshop: infoItemShopReducer,
    stateItem: stateItemChange
})
export default rootReducer
