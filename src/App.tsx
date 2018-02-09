import * as React from 'react';
import Test from './Test';
import './App.css';

const logo = require('./logo.svg');

type Data = {
  readonly industry: Energymix;
  readonly steelmill: Energymix;
  readonly petrochemical: Energymix;
  readonly warnings: string[];
};

type Energymix = {
  readonly fossil: number;
  readonly bio: number;
  readonly electricity: number;
};

type Section = {
  readonly label: string;
  readonly questions: Question[];
};

type Question = {
  readonly label: String;
  readonly subQuestions: SubQuestion[];
};

type SubQuestion = {
  readonly label: string;
  readonly answer?: number;
  readonly reducer: (data: Data, answer: number) => Data;
  readonly validator: (
    answer: number,
  ) => { readonly valid: boolean; readonly message?: string };
};

type State = {
  readonly sections: Section[];
};

const data2015: Data = {
  industry: {
    fossil: 12,
    bio: 62,
    electricity: 50,
  },
  steelmill: {
    fossil: 18,
    bio: 0,
    electricity: 0,
  },
  petrochemical: {
    fossil: 35,
    bio: 0,
    electricity: 0,
  },
};

const sections: Section = {
  label: 'Industrin',
  questions: [
    {
      label:
        'Industrin i Sverige förbrukar idag 12 TWh fossila bränslen om året för att få energi.',
      subQuestions: [
        {
          label: 'Hur många TWh vill du ersätta med el',
          reducer: (data: Data, answer: number) => {},
        },
      ],
    },
  ],
};

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
