import {createStore, combineReducers} from 'redux';
import myWordReducer from './reducer/myWordReducer';
import toggleIsAddingReducer from './reducer/toggleIsAdding';
import fillterStatusReducer from './reducer/fillterStatus';
// const defaultState = {
//     myWords : [
//         { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: false },
//         { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
//         { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: false },
//         { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
//         { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
//         { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
//         { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
//         { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
//         { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
//         { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
//         { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
//         { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
//         { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
//         { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
//     ],
//     filterStatus : 'SHOW_ALL', isAdding: false
// };

// const reducer = (state = defaultState, action)=>{
//     switch(action.type){
//         case 'FILTER_SHOW_ALL':
//         return {...state, filterStatus: 'SHOW_ALL'};
//         case 'FILTER_MEMORIED':
//         return {...state, filterStatus: 'MEMORIED'};
//         case 'FILTER_NEED_PRACTICE':
//         return {...state, filterStatus: 'NEED_PRACTICE'};
//         case 'MEMORIED':
//         return {...state, myWords: state.myWords.map(e=> {
//             if(e.id !== action.id) return e;
//             return {...e, memorized: !e.memorized}
//         })}
//         case 'ISShow':
//         return {...state, myWords: state.myWords.map(e=> {
//             if(e.id !== action.id) return e;
//             return {...e, isShow: !e.isShow}
//         })}
//         case 'ADDING':
//         return {...state, isAdding: !state.isAdding};
//         case 'ADDED':
//         return {...state, myWords: [{id : state.myWords.length + 1, en: action.en, vn: action.vn, memorized: false, isShow: false}].concat(state.myWords)}
//         default: break;
//     }
//   return state;
// }
const reducer = combineReducers({
   myWordReducer,
   toggleIsAddingReducer,
   fillterStatusReducer
})
const store = createStore(reducer);
export default store;