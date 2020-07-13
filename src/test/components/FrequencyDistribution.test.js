import React from 'react';
import {IntlProvider} from "react-intl";
import { render, screen } from '@testing-library/react';
import FrequencyDistribution from '../../components/FrequencyDistribution';
import locale_en_us from '../../resources/en-us.json'

test('when rendering frequencies', () => {
  let frequencyCount;

  render(
    <IntlProvider locale='en' messages={locale_en_us}>
      <FrequencyDistribution
        numbers={[5, 5, 21, 42, 42, 42]}
        callbackFromParent={jest.fn(f => frequencyCount = f)}/>
    </IntlProvider>
  );

  screen.getByRole('button').click();
  expect(frequencyCount).toEqual([[5, 2], [21, 1], [42, 3]]);
});

