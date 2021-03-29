import { sampleReducer } from './index';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
    sampleReducer,
    form: formReducer
})