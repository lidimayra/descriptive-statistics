import React, { Component } from "react";
import {FormattedMessage} from 'react-intl';
import { Button } from 'react-materialize';

class NumbersGenerator extends Component {
  constructor(props) {
    super(props);

    this.generateValues = this.generateValues.bind(this);
  }

  generateValues() {
    let numbers = Array.from(Array(30), () => Math.floor(Math.random() * 8) + 20);
    this.props.callbackFromParent(numbers);
  }

  render() {
    return (
      <span>
        <div className="section">
          <p>
            <FormattedMessage id='randomValues.header' />
          </p>

          <Button onClick={this.generateValues}>
            <FormattedMessage id='randomValues.show' />
          </Button>
        </div>
      </span>
    );
  }
}
export default NumbersGenerator;
