import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import canvasReducer from './canvasReducer';

export default combineReducers({
  data: dataReducer,
  canvas: canvasReducer
});
