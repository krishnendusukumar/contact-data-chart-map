
import { combineReducers } from 'redux';
import { formReducer } from './contactReducers';

const rootReducer = combineReducers({
    formData: formReducer,
});

export default rootReducer;