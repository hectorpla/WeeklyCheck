import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AppAction, notifySearchTextChange } from './actions';
import { fetchTasksBatch } from './actions/async';
import { App } from './App';
import { getDay } from './common';
import { TASK_GRAIN } from './constants';
import rootReducer from './reducers/index';
import { AppState } from './types/index';

const currentTime = new Date();

// TODO: integrate Redux-observable: more powerful than thunk, 
// beneficial to deal with deal with a stream of actions


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
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

type AppActionThunkDispatch = ThunkDispatch<AppState, void, AppAction>;
const storeDispatch = store.dispatch as AppActionThunkDispatch;

storeDispatch(fetchTasksBatch(
  TASK_GRAIN.WEEK,
  currentTime
)).then(
  () => storeDispatch(notifySearchTextChange(""))
);

registerServiceWorker();
