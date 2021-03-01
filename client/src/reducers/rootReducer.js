import { combineReducers } from 'redux';
import { overReducer } from './overReducer'
import { navReducer } from './navReducer'
import { tglEduReducer } from './eduReducer'

const rootReducer = combineReducers({
    overview: overReducer,
    nav: navReducer,
    eduRed: tglEduReducer
});

export default rootReducer;