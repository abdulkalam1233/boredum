import {createStore, combineReducers} from 'redux';
import AuthReducer from './reducers/AuthReducer';

const appReducer = combineReducers({
  auth: AuthReducer,
});

const configureStore = () => {
  return createStore(appReducer);
};

export default configureStore;
