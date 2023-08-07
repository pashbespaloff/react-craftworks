import React from 'react';
import style from "./Cart.module.css";

export default function ShoppingItem({ item, plus, minus }) {
  return (
    item.count > 0 && (
      <li>
        <p>{item.name} (<span className={style.count}>{item.count}</span>)</p>
        <div className={style.buttons}>
          <button onClick={plus} className={style.plus}>+</button>
          <button onClick={minus} className={style.minus}>–</button>
        </div>
      </li>
    )
  )
}