import * as React from 'react';
import Svar from './Svar';

type Props = {
  readonly name: string;
  readonly svarTill: ReadonlyArray<string>;
};

type State = {
  readonly bool: boolean;
};

class Test extends React.Component<Props, State> {
  readonly state = { bool: false };

  readonly handleClick = (_: any): void => {
    this.setState({ bool: true });
  };

  render(): JSX.Element {
    return (
      <div>
        <h1 onClick={this.handleClick}>Hej hopp säger {this.props.name}</h1>
        {this.state.bool ? (
          <div>{this.props.svarTill.map(person => <Svar name={person} />)}</div>
        ) : null}
      </div>
    );
  }
}

export default Test;

//        <div>{this.props.svarTill.map(person => <Svar name={person} />)}</div>
