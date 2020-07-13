import React, { Component } from "react";
import { injectIntl } from 'react-intl';
import M from "materialize-css";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

class FrequencyTable extends Component {
  constructor(props) {
    super(props);

    this.displayFrequencies = this.displayFrequencies.bind(this);
    this.help = this.help.bind(this);
  }

  componentDidMount() {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
  }

  displayFrequencies() {
    return this.props.frequencyCount.map(([xi, fi]) =>
      <tr key={xi}>
        <td>{xi}</td>
        <td>{fi}</td>
        {this.props.children}
      </tr>
    );
  }

  help(intl, topic, notation) {
    return(
      <span className="tooltipped purple-text text-darken-1"
        data-position="bottom"
        data-tooltip={intl.formatMessage({id: `frequencyTable.help.${topic}`})}>
        <InlineMath math={notation}/>&nbsp;
        <i className="tiny material-icons">help</i>
      </span>);
  }

  render() {
    const { intl } = this.props;

    return(
      <table className='striped'>
        <thead>
          <tr alt='Frequency Table Header'>
            <th>{this.help(intl, 'xi', 'x_{i}')}</th>
            <th>{this.help(intl, 'fi', 'f_{i}')}</th>
          </tr>
        </thead>
          <tbody>
            {this.displayFrequencies()}
          </tbody>
      </table>
    );
  }
}

export default injectIntl(FrequencyTable);
