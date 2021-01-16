import { combineReducers } from 'redux';
import { overReducer } from './overReducer'

const rootReducer = combineReducers({
    overview: overReducer
});

export default rootReducer;