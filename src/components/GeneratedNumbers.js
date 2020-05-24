import React, { Component } from "react";
import {FormattedMessage} from 'react-intl';

class GeneratedNumbers extends Component {
  constructor(props) {
    super(props);

    this.sort = this.sort.bind(this);

    this.state = {
      sorted: false
    }
  }

  sort() {
    let numbers = this.props.numbers.sort();
    this.setState({ sorted: true });
    this.props.callbackFromParent(numbers);
  }

  render() {
    return(
      <div className="section">
        <p>
          <FormattedMessage id='randomValues.header' />
        </p>
        <div className="card blue-grey darken-1 z-depth-3">
          <div className="card-content white-text">
            <span className="card-title">
              <FormattedMessage id='randomValues.results' />
            </span>

            {this.props.numbers.join(', ')}

            { !this.state.sorted &&
              <div className="card-action">
                <a href="#" onClick={this.sort}>
                  <FormattedMessage id='randomValues.sort' />
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default GeneratedNumbers;
