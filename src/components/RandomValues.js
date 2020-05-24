import React, { Component } from "react";
import { Button } from 'react-materialize';
import {FormattedMessage} from 'react-intl';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class RandomValues extends Component {
  constructor(props) {
    super(props);

    this.generateValues = this.generateValues.bind(this);
    this.sort = this.sort.bind(this);
    this.state = {
      numbers: null
    }
  }

  generateValues() {
    this.setState({
      numbers: Array.from(Array(30), () => Math.floor(Math.random() * 8) + 20)
    });
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

        <div className="section">
            <p>
              <FormattedMessage id='randomValues.header' />
            </p>

            <Button onClick={this.generateValues}>
              <FormattedMessage id='randomValues.show' />
            </Button>
        </div>

        {this.state.numbers &&
          <div className="section">
            <p className="card-panel purple lighten-5">{this.state.numbers.join(', ')}</p>
            <Button id="sortBtn" onClick={this.sort}>
              <FormattedMessage id='randomValues.sort' />
            </Button>
          </div>
        }
      </div>
    );
  }
}

export default RandomValues;
