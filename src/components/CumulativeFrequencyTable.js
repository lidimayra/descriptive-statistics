import React, { Component } from "react";
import FrequencyTable from './FrequencyTable';

class CumulativeFrequencyTable extends Component {
  calculate() {
  }

  render() {
    return(
      <FrequencyTable data={this.props.data}>
      </FrequencyTable>
    );
  }
}

export default CumulativeFrequencyTable;
