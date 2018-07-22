import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { AppAction, notifySearchTextChange } from './actions';
import { fetchTasksBatch } from './actions/async';
import { App } from './App';
import { configureStore } from './configureStore';
import { TASK_GRAIN } from './constants';
import { AppState } from './types/index';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

type AppActionThunkDispatch = ThunkDispatch<AppState, void, AppAction>;
const storeDispatch = store.dispatch as AppActionThunkDispatch;

// get async result to fill data 
storeDispatch(fetchTasksBatch(
  TASK_GRAIN.WEEK,
  store.getState().activeDaySlice.currentTime
)).then(
  () => storeDispatch(notifySearchTextChange(""))
);

registerServiceWorker();
