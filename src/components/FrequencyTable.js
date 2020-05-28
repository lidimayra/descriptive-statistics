import React, { Component } from "react";

class FrequencyTable extends Component {
  constructor(props) {
    super(props);

    this.displayFrequencies = this.displayFrequencies.bind(this);
    this.state = { frequencyCount: null };
  }

  componentDidMount() {
    this.setState({ frequencyCount: Array.from(this.calculate()) });
  }

  calculate() {
    return this.props.numbers.reduce(
      (acc, xi) => { acc.set(xi, (acc.get(xi) || 0) + 1); return acc },
      new Map()
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

  render() {
    return(
      <div className="section">
        { this.state.frequencyCount != null &&
          <div className='row'>
            <div className='col s4 offset-s4'>
              <table className='striped'>
                <thead>
                  <tr>
                    <th>xi</th>
                    <th>fi</th>
                  </tr>
                </thead>
                <tbody>
                  {this.displayFrequencies()}
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default FrequencyTable;
