import { h, Component } from 'preact';

import Test from '../../components/Test';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Test/>
      </div>
    );
  }
}

export default App;