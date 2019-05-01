import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers

export default history =>
  combineReducers({
    router: connectRouter(history)
  });
