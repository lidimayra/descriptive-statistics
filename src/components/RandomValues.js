import React, { Component } from "react";
import { Button } from 'react-materialize';
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
      <div>
        <p>
          Uma revista publicou os valores que uma determinada cidade registrou 
          ao meio-dia ao longo de 30 dias. Para visualizar os resultados, clique
          no botão abaixo.
        </p>

        <Button onClick={this.generateValues}>Visualizar</Button>

        {this.state.numbers &&
          <span>
            <p>{this.state.numbers.join(', ')}</p>
            <Button id="sortBtn" onClick={this.sort}>
              Ordenar
            </Button>
          </span>
        }
      </div>
    );
  }
}

export default RandomValues;
