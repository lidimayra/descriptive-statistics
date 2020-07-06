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
    this.columns = this.columns.bind(this);
  }

  componentDidMount() {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
  }

  columns(index) {
    return <td>{this.props.data.fi[index]}</td>;
  }

  displayFrequencies() {
    return this.props.data.xi.map((xi, index) => {
      return <tr key={xi}>
               <td>{xi}</td>
               {this.columns(index)}
             </tr>;
    });
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
