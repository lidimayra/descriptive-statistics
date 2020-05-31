import React, { Component } from "react";
import { FormattedMessage, injectIntl } from 'react-intl';
import { Button } from 'react-materialize';
import M from "materialize-css";

class FrequencyTable extends Component {
  constructor(props) {
    super(props);

    this.displayText = this.displayText.bind(this);
    this.displayTable = this.displayTable.bind(this);
    this.displayFrequencies = this.displayFrequencies.bind(this);
    this.help = this.help.bind(this);
    this.state = {
      frequencyCount: null,
      display: false
    };
  }

  componentDidMount() {
    this.setState({ frequencyCount: Array.from(this.calculate()) });
  }

  componentDidUpdate() {
    if (this.state.display) {
      M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
    }
  }

  calculate() {
    return this.props.numbers.reduce(
      (acc, xi) => { acc.set(xi, (acc.get(xi) || 0) + 1); return acc },
      new Map()
    );
  }

  displayTable() {
    this.setState({ display: true });
  }

  displayText() {
    return this.state.frequencyCount.map(([xi, fi]) =>
      <p key={xi}>
        <FormattedMessage
          id='frequencyTable.number-occurrences'
          values={{ xi: <strong>{xi}</strong>, fi: <strong>{fi}</strong> }}/>
      </p>
    );
  }

  displayFrequencies() {
    return this.state.frequencyCount.map(([xi, fi]) =>
      <tr key={xi}>
        <td>{xi}</td>
        <td>{fi}</td>
      </tr>
    );
  }

  help(intl, topic) {
    return(
      <span className="tooltipped purple-text text-darken-1"
        data-position="bottom"
        data-tooltip={intl.formatMessage({id: `frequencyTable.help.${topic}`})}>
          {topic}&nbsp;
        <i className="tiny material-icons">help</i>
      </span>);
  }

  render() {
    if (!this.state.frequencyCount) {
      return null
    }

    const { intl } = this.props;

    return(
      <div className="row">
        <div className="col s6">
          <p><FormattedMessage id='frequencyTable.analysis' /></p>

          {this.displayText()}

          <p>
            <FormattedMessage id='frequencyTable.frequencyDistribution' />
          </p>

          { !this.state.display &&
            <Button onClick={this.displayTable}>
              <FormattedMessage id='frequencyTable.showInTable' />
            </Button>
          }
        </div>

       { this.state.display &&
         <div className="col s6">
           <table className='striped'>
             <thead>
               <tr>
                 <th>{this.help(intl, 'xi')}</th>
                 <th>{this.help(intl, 'fi')}</th>
               </tr>
             </thead>
                <tbody>
                  {this.displayFrequencies()}
                </tbody>
           </table>
          </div>
       }
      </div>
    );
  }
}

export default injectIntl(FrequencyTable);
