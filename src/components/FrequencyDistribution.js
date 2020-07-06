import React, { Component } from "react";
import { FormattedMessage, injectIntl } from 'react-intl';
import { Button } from 'react-materialize';
import FrequencyTable from './FrequencyTable';

class FrequencyDistribution extends Component {
  constructor(props) {
    super(props);

    this.displayText = this.displayText.bind(this);
    this.displayTable = this.displayTable.bind(this);
    this.state = {
      display: false,
      data: null
    };
  }

  componentDidMount() {
    const map = { 'xi': [], 'fi': [] };
    Array.from(this.calculate()).forEach((arr) => {
      map.xi.push(arr[0]);
      map.fi.push(arr[1]);
    });

    this.setState({ data: map });
  }

  calculate() {
    return this.props.numbers.reduce(
      (acc, xi) => { acc.set(xi, (acc.get(xi) || 0) + 1); return acc },
      new Map()
    );
  }

  displayTable() {
    this.setState({ display: true });
    this.props.callbackFromParent(this.state.data);
  }

  displayText() {
    return this.state.data.xi.map((xi, index) =>
      <p key={xi}>
        <FormattedMessage
          id='frequencyTable.number-occurrences'
          values={
            { xi: <strong>{xi}</strong>,
              fi: <strong>{this.state.data.fi[index]}</strong> }
          }/>
      </p>
    );
  }

  render() {
    if (!this.state.data) {
      return null
    }

    return(
      <div className="row">
        <div className="col s6">
          <p><FormattedMessage id='frequencyDistribution.analysis' /></p>

          {this.displayText()}

          <p>
            <FormattedMessage id='frequencyDistribution.description' />
          </p>

          { !this.state.display &&
            <Button onClick={this.displayTable}>
              <FormattedMessage id='frequencyDistribution.showInTable' />
            </Button>
          }
        </div>

       { this.state.display &&
        <div className="col s6">
          <FrequencyTable data={this.state.data}/>
        </div>
       }
      </div>
    );
  }
}

export default injectIntl(FrequencyDistribution);
