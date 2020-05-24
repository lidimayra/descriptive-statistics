import React, { Component } from "react";
import {FormattedMessage} from 'react-intl';
import NumbersGenerator from './NumbersGenerator';
import GeneratedNumbers from './GeneratedNumbers';

class RandomValues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: null,
      sortedNumbers: null
    }
  }

  fetchNumbers = (numbers) => {
    this.setState({ numbers: numbers });
  }

  fetchSortedNumbers = (numbers) => {
    this.setState({ sortedNumbers: numbers });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="purple-text text-darken-4 h1">
            <FormattedMessage id='randomValues.title' />
          </h1>
        </div>

        <div className="divider"></div>

        <NumbersGenerator callbackFromParent={this.fetchNumbers}/>

        <GeneratedNumbers
          numbers={this.state.numbers}
          callbackFromParent={this.fetchSortedNumbers}/>
      </div>
    );
  }
}

export default RandomValues;
