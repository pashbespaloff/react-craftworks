import React from 'react';
import style from "./Cart.module.css";

const ShoppingCartElement = ({ element, plus, minus }) => {
  return (
    <li>
      <p>{element.name} (<span className={style.count}>{element.count}</span>)</p>
      <div className={style.buttons} id={element.id}>
        <button onClick={plus} className={style.plus}>+</button>
        <button onClick={minus} className={style.minus}>–</button>
      </div>
    </li>
  )
};

export default ShoppingCartElement;