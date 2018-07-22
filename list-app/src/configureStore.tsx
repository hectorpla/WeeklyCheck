import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';

import { AppAction } from './actions';
import { getDay } from './common';
import { refreshFilterItemsEpic } from './epics/refreshFilter';
import rootReducer from './reducers/index';
import { AppState } from './types';

// TODO: integrate Redux-observable: more powerful than thunk, 
// beneficial to deal with deal with a stream of actions
const epicMiddleware = createEpicMiddleware();
// wraping for the store creating function
const myCreateStore = applyMiddleware(epicMiddleware, thunk, logger)(createStore);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore() {
  const currentTime = new Date();


  const store = myCreateStore<AppState, AppAction>(
    rootReducer,
    {
      activeDaySlice: {
        activeDay: getDay(currentTime),
        currentTime
      }
    },
  );

  // Run epics, is the position right?
  epicMiddleware.run(refreshFilterItemsEpic);

  return store;
}