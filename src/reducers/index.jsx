import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import AppReducer from './AppReducer';

const allReducers = combineReducers({
    routing: routerReducer,
    appReducer: AppReducer
});

export default allReducers;