import React from 'react';
import style from "./Counter.module.css";

export default function ButtonsAndResult({plus, minus, result, setResult}) {
  const increaseResult = () => setResult(result + plus);
  const decreaseResult = () => setResult(result - minus);

  return (
    <div className={style.innerbox}>
      <button 
        className={style.button}
        onClick={decreaseResult}
      >
      -{minus}
      </button>
      
      <input className={style.result} value={result} disabled/>

      <button 
        className={style.button}
        onClick={increaseResult}
      >
      +{plus}
      </button>
    </div>
  );
};