import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import RouterConfig from './RouterConfig';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterConfig />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
