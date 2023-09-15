import { combineReducers } from '@reduxjs/toolkit';

import App from './App';
import Chart from './Charts';

export default combineReducers({
  app: App,
  chart: Chart,
});
