import * as React from 'react';
import Test from './Test';
import './App.css';

const logo = require('./logo.svg');

type State = {};

class App extends React.Component<{}, State> {
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Test name="Vide" svarTill={['Erik', 'Samson']} />
      </div>
    );
  }
}

export default App;
