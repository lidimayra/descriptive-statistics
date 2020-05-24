import React from 'react';
import {IntlProvider} from "react-intl";
import { fireEvent, render, screen } from '@testing-library/react';
import RandomValues from '../../components/RandomValues';
import locale_en_us from '../../resources/en-us.json'

beforeEach(() => {
  render(
    <IntlProvider locale='en' messages={locale_en_us}>
      <RandomValues />
    </IntlProvider>
  );
});

test('initial state', () => {
  expect(screen.getByRole('heading')).toHaveTextContent('Frequencies Distribution');
  expect(screen.getByText('Show')).toBeInTheDocument();
  expect(screen.queryByText('Sort')).not.toBeInTheDocument()
});


test('when generating random values', () => {
  // 30 2-digit numbers separated by a comma
  const randomNumbersPattern = /(\d{2}, ){29}\d{2}/;

  fireEvent.click(screen.getByText('Show'));

  expect(screen.getByText('Sort')).toBeVisible();
  expect(screen.getByText(randomNumbersPattern)).toBeInTheDocument();
});
