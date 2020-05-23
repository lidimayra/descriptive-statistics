import React from 'react';
import {IntlProvider} from "react-intl";
import { fireEvent, render, screen } from '@testing-library/react';
import RandomValues from '../../components/RandomValues';
import locale_en_us from '../../resources/en-us.json'

test('generate random values', () => {
  render(
    <IntlProvider locale='en' messages={locale_en_us}>
      <RandomValues />
    </IntlProvider>
  );

  // 30 2-digit numbers separated by a comma
  const randomNumbersPattern = /(\d{2}, ){29}\d{2}/;

  expect(screen.getByText('Show')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Show'));

  expect(screen.getByText(randomNumbersPattern)).toBeInTheDocument();
  expect(screen.getByText('Sort')).toBeVisible();
});
