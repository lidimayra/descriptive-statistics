import React, { Component } from "react";
import {IntlProvider} from "react-intl";
import locale_en_us from '../resources/en-us.json'
import locale_pt_br from '../resources/pt-br.json'
import './App.css';

import RandomValues from './RandomValues';

const data = {
    'pt-BR': locale_pt_br,
    'en-US': locale_en_us
};

class App extends Component {
  render() {
    return (
      <IntlProvider locale={navigator.language} messages={data[navigator.language]}>
        <div className="App">
          <RandomValues />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
