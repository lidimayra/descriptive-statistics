import React from 'react';
import {IntlProvider} from "react-intl";
import { fireEvent, render, screen } from '@testing-library/react';
import GeneratedNumbers from '../../components/GeneratedNumbers';
import locale_en_us from '../../resources/en-us.json'

test('initial state', () => {
  render(
    <IntlProvider locale='en' messages={locale_en_us}>
      <GeneratedNumbers numbers={[3, 6, 1, 8]}/>
    </IntlProvider>
  );

  expect(screen.getByText('3, 6, 1, 8')).toBeInTheDocument();
  expect(screen.getByText('Sort')).toBeInTheDocument();
});

test('when sorting results', () => {
  let fetchNumbers = function(numbers) {
    expect(numbers).toEqual([1, 3, 6, 8 ])
  }

  render(
    <IntlProvider locale='en' messages={locale_en_us}>
      <GeneratedNumbers numbers={[3, 6, 1, 8]} callbackFromParent={fetchNumbers} />
    </IntlProvider>
  );

  fireEvent.click(screen.getByText('Sort'));
  expect(screen.queryByText('Sort')).not.toBeInTheDocument()
});

