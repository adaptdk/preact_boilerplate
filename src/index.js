import { h, render } from 'preact';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/styles/main.scss';
import App from './containers/App/App.js';
import registerServiceWorker from './utilities/registerServiceWorker';

import configureStore from './utilities/configureStore';

const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();