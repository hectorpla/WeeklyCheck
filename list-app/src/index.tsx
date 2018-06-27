import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { AppAction } from './actions';
import CardList from './containers/CardList';
import rootReducer from './reducers/index';
import { AppState } from './types/index';

// fixed the generics
// too much boilerplate
const store = createStore<AppState, AppAction, any, any>(rootReducer, {
  // activeDaySlice: {
  //   activeDay: 'Thursday',
  //   currentTime: new Date()
  // },
},
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <CardList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
