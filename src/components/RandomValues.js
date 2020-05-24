import React, { Component } from "react";
import {FormattedMessage} from 'react-intl';
import NumbersGenerator from './NumbersGenerator';

class RandomValues extends Component {
  constructor(props) {
    super(props);

    this.sort = this.sort.bind(this);
    this.state = {
      numbers: null
    }
  }

  fetchNumbers = (numbers) => {
    this.setState({ numbers: numbers });
  }

  sort() {
    this.setState(state => ({
      numbers: state.numbers.sort()
    }));
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

        { !this.state.numbers &&
          <NumbersGenerator callbackFromParent={this.fetchNumbers}/>
        }

        {this.state.numbers &&
          <div className="section">
            <div className="card blue-grey darken-1 z-depth-3">
              <div className="card-content white-text">
                <span className="card-title">
                  <FormattedMessage id='randomValues.results' />
                </span>

                {this.state.numbers.join(', ')}

                <div className="card-action">
                  <a href="#" onClick={this.sort}>
                    <FormattedMessage id='randomValues.sort' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default RandomValues;
