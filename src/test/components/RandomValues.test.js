import React from 'react';
import {IntlProvider} from "react-intl";
import { fireEvent, render, screen } from '@testing-library/react';
import RandomValues from '../../components/RandomValues';
import locale_en_us from '../../resources/en_US.json'

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

