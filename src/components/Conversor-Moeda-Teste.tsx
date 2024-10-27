import { fireEvent, render, screen } from '@testing-library/react';
import CurrencyConverter from './ConversorMoeda';

test('renders Currency Converter', () => {
  render(<CurrencyConverter />);
  expect(screen.getByText(/Currency Converter/i)).toBeInTheDocument();
});

test('converts currency correctly', () => {
  render(<CurrencyConverter />);
  
  const inputAmount = screen.getByLabelText(/From Currency/i);
  const outputAmount = screen.getByText(/Converted Amount/i);

  fireEvent.change(inputAmount, { target: { value: '100' } });
  expect(outputAmount).toHaveTextContent('85.00 EUR');
});
