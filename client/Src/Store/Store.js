import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tradeReducer from './reducers/tradeReducer';
import notificationReducer from './reducers/notificationReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  trade: tradeReducer,
    notification: notificationReducer,
      auth: authReducer,
      });

      const store = createStore(rootReducer, applyMiddleware(thunk));

      export default store;