import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { connectRouter , routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension'
import history from '../history';

const rootReducer =  combineReducers({
  router: connectRouter(history),
  user : reducer
})

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
);