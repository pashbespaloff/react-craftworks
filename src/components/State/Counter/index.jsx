import React, { useState } from 'react';
import ButtonsAndResult from './ButtonsAndResult';
import CounterSettings from './CounterSettings';

export default function Counter() {
  const [plus, setPlus] = useState(1);
  const [minus, setMinus] = useState(1);
  const [result, setResult] = useState(0);

  return (
    <>
      <ButtonsAndResult 
        plus={plus} 
        minus={minus} 
        result={result}
        setResult={setResult}
      />
      <CounterSettings
        plus={plus} 
        minus={minus} 
        setPlus={setPlus}
        setMinus={setMinus}
      />
    </>
  );
};