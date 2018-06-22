import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { appReducer } from './reducers/index';
import { AppState } from './types/index';
import { Provider } from 'react-redux';
import CardList from './containers/CardList';
import { ToggleAction } from './actions';
import { WEEK_DAY_ARRAY } from './constants';

// complaints: new APIs?
const store = createStore<AppState, ToggleAction, any, any>(appReducer, {
  activeDay: WEEK_DAY_ARRAY[new Date().getDay()],
  currentTime: new Date()
});

ReactDOM.render(
  <Provider store={store}>
    <CardList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
