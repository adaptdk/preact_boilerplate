import { createStore, applyMiddleware, compose } from 'redux';
import 'preact/devtools';

// Importing Middlewares
import { middlewares } from './middlewares/middlewares';
import rootReducer from '../reducers/Root';

const configureStore = (initialState = {}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const middleware = applyMiddleware(...middlewares);

  // If Production
  if (isProduction) {
    return createStore(
      rootReducer,
      middleware
    );
  }

  // If Not Production
  // Enable DevTools if browser extension is installed
  let enhancer;
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
