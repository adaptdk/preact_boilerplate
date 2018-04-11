import { h, render } from 'preact';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// Constants
import routes from './constants/Routes';

// Utilities
import registerServiceWorker from './utilities/registerServiceWorker';
import configureStore from './utilities/configureStore';

// Importing Styles
import './assets/styles/critical.scss';
import './assets/styles/main.scss';
import './assets/styles/vendor/dev.scss';

// Confiuring Redux Store
const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line

render(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
