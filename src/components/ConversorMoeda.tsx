import React, { useEffect, useState } from 'react';
import exchangeRates from '../data/taxasCambio.json';
import CurrencyInput from './EntradaMoeda';

const ConversorMoeda: React.FC = () => {
  const [valor, setValor] = useState<number>(0);
  const [moedaOrigem, setMoedaOrigem] = useState<string>('USD');
  const [moedaDestino, setMoedaDestino] = useState<string>('EUR');
  const [valorConvertido, setValorConvertido] = useState<number>(0);

  const converterMoeda = (valor: number, de: string, para: string): number => {
    const taxaOrigem = exchangeRates[de];
    const taxaDestino = exchangeRates[para];
    return (valor / taxaOrigem) * taxaDestino;
  };

  useEffect(() => {
    setValorConvertido(converterMoeda(valor, moedaOrigem, moedaDestino));
  }, [valor, moedaOrigem, moedaDestino]);

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>Conversor de Moeda</h2>
      <CurrencyInput
        amount={valor}
        setAmount={setValor}
        currency={moedaOrigem}
        setCurrency={setMoedaOrigem}
        title="De"
      />
      <CurrencyInput
        amount={valorConvertido}
        setAmount={setValorConvertido}
        currency={moedaDestino}
        setCurrency={setMoedaDestino}
        title="Para"
        isOutput
      />
      <h3>
        Valor Convertido: {valorConvertido.toFixed(2)} {moedaDestino}
      </h3>
    </div>
  );
};

export default ConversorMoeda;
