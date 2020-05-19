import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RandomValues from '../../components/RandomValues';

test('generate random values', () => {
  render(<RandomValues />);

  // 30 2-digit numbers separated by a comma
  const randomNumbersPattern = /(\d{2}, ){29}\d{2}/;

  expect(screen.getByText('Visualizar')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Visualizar'));

  expect(screen.getByText(randomNumbersPattern)).toBeInTheDocument();
  expect(screen.getByText('Ordenar')).toBeVisible();
});
