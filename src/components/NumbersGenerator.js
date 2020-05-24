import React, { Component } from "react";
import {FormattedMessage} from 'react-intl';
import { Button } from 'react-materialize';

class NumbersGenerator extends Component {
  constructor(props) {
    super(props);

    this.generateValues = this.generateValues.bind(this);

    this.state = {
      numbers: null
    }
  }

  generateValues() {
    let numbers = Array.from(Array(30), () => Math.floor(Math.random() * 8) + 20);
    this.setState({ numbers: numbers });
    this.props.callbackFromParent(numbers);
  }

  render() {
    if (this.state.numbers) {
      return null;
    }

    return (
      <span>
        <div className="section">
          <p>
            <FormattedMessage id='numbersGenerators.header' />
          </p>

          <Button onClick={this.generateValues}>
            <FormattedMessage id='numbersGenerators.show' />
          </Button>
        </div>
      </span>
    );
  }
}
export default NumbersGenerator;
