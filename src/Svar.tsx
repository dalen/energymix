import * as React from 'react';

type Props = {
  readonly name: string;
};

/*
class Svar extends React.Component<Props> {
  render(): JSX.Element {
    return <h2>{this.props.name} svarar hej</h2>;
  }
}
*/

const Svar = (props: Props): JSX.Element => {
  if (props.name === 'Samson') {
    return <h4>voff</h4>;
  }
  return <h2>{props.name} svarar hej</h2>;
};

export default Svar;
