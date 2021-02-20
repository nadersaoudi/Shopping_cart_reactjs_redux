import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './Reducer';

const initialStete = {};
const Middleware = [thunk];

const store  = createStore (
    rootReducer,
    initialStete,
    composeWithDevTools(applyMiddleware(...Middleware))
);
export default store;