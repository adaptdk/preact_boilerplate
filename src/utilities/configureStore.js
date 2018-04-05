import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import 'preact/devtools';

// Reducer
import rootReducer from '../reducers/Root';

const configureStore = (initialState = {}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const middleware = applyMiddleware(thunk, promise);
  // If Production
  if (isProduction) {
    return createStore(
      rootReducer,
      middleware
    );
  }

  // If Not Production
  let enhancer;
  // Enable DevTools if browser extension is installed
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
  } else {
    enhancer = compose(middleware);
  }

  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
};

export default configureStore;
