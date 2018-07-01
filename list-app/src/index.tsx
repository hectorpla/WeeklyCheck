import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AppAction } from './actions';
import { fetchTasksBatch } from './actions/async';
import { getDay } from './common';
import { TASK_GRAIN } from './constants';
import CardList from './containers/CardList';
import rootReducer from './reducers/index';
import { AppState } from './types/index';

const currentTime = new Date();

// wraping for the store creating function
const myCreateStore = applyMiddleware(thunk, logger)(createStore);

const store = myCreateStore<AppState, AppAction>(
  rootReducer, 
  {
    activeDaySlice: {
      activeDay: getDay(currentTime),
      currentTime
    }
  },
);

// TODO prefetch data?

ReactDOM.render(
  <Provider store={store}>
    <CardList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

(store.dispatch as ThunkDispatch<AppState, void, AppAction>)(fetchTasksBatch(
  TASK_GRAIN.WEEK,
  currentTime
));

registerServiceWorker();
