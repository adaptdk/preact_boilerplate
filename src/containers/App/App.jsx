import { h, Component } from 'preact';
import { CSSTransition } from 'react-transition-group';

import logo from '../../assets/icons/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClicker = this.onClicker.bind(this);
    this.state = {
      test: false,
    };
  }

  onClicker() {
    this.setState({
      test: !this.state.test,
    });
  }

  render() {
    const { test } = this.state;

    return (
      <div className="app">
        <CSSTransition
          in={test === true}
          timeout={500}
          classNames="animate-fromTop"
          unmountOnExit
        >
          {() => (
            <header className="app-header">
              <img src={logo} className="app-logo" alt="logo"/>
              <h1 className="app-title">Welcome to React</h1>
            </header>
          )}
        </CSSTransition>
        <button className="app-intro" onClick={this.onClicker}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </button>
      </div>
    );
  }
}

export default App;