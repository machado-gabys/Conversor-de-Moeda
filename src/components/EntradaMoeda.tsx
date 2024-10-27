import React from 'react';

interface CurrencyInputProps {
  amount: number;
  setAmount: (amount: number) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  isOutput?: boolean;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  amount,
  setAmount,
  currency,
  setCurrency,
  isOutput = false,
}) => {
  const currencies = ['USD', 'EUR', 'BRL', 'JPY'];

  return (
    <div>
      <input
        type="number"
        value={isOutput ? amount.toFixed(2) : amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isOutput}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
