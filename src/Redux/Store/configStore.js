import {compose, createStore, applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import rootReducer from '../Reducer/reducer'
// const config = {
//   key: 'root',
//   storage,
// }
// const reducer = persistReducer(config, rootReducer)
// export default function configureStore(){
//   let store = createStore(reducer,applyMiddleware(thunk))
//   let persistor = persistStore(store)
//   return { persistor, store}
// }
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;