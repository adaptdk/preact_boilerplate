// @flow
import { handleActions } from 'redux-actions';
import * as types from '../constants/App';

const initialState = {
  isModalActive: false,
  modalVariant: undefined,
};

const appHandler = (state, action) => {
  switch (action.type) {
    case types.APP_INITIAL:
      return {
        ...initialState,
      };
    default:
      return {};
  }
};

const App = handleActions({
  [types.APP_INITIAL]: (state, action) => ({
    ...state,
    ...appHandler(state, action),
  }),
}, initialState);

export default App;
