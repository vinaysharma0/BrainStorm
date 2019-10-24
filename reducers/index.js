import {combineReducers} from 'redux';
import registrationReducer from './reducer.registration';

const rootReducer = combineReducers({
    userData : registrationReducer,
    
})

export default rootReducer