import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tradeReducer from './reducer/tradeReducer';
import notificationReducer from './reducer/notificationReducer';
import authReducer from './reducer/authReducer';

const rootReducer = combineReducers({
  trade: tradeReducer,
    notification: notificationReducer,
      auth: authReducer,
      });

      const store = createStore(rootReducer, applyMiddleware(thunk));

      export default store;
