import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import formReducer from '../components/SubmitForm';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    // form: formReducer,
    streams: streamReducer
});