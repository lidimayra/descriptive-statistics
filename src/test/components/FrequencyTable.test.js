import React from 'react';
import {IntlProvider} from "react-intl";
import { render, screen } from '@testing-library/react';
import FrequencyTable from '../../components/FrequencyTable';
import locale_en_us from '../../resources/en-us.json'

test('when rendering table', () => {
  render(
    <IntlProvider locale='en' messages={locale_en_us}>
      <FrequencyTable
        frequencyCount={[[5, 2], [21, 1], [42, 3]]} />
    </IntlProvider>
  );

  expect(screen.getByRole('row', { name: "5 2"})).toBeInTheDocument();
  expect(screen.getByRole('row', { name: "21 1"})).toBeInTheDocument();
  expect(screen.getByRole('row', { name: "42 3"})).toBeInTheDocument();
});

