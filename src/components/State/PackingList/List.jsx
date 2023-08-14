import React from 'react';
import style from './PackingList.module.css';

export default function List({packingList, onChangeItem, onDeleteItem}) {
  return (
    <ul className={style.list}>
      {
        packingList.map(item => (
          <li key={item.id}>
            <input 
              className={style.checkbox}
              type="checkbox" 
              id={`checkbox${item.id}`}
              checked={item.packed} 
              onChange={() => onChangeItem({...item, packed: !item.packed})}
            />
            <label htmlFor={`checkbox${item.id}`}>
              {item.title}
            </label>
            <button onClick={() => onDeleteItem(item)}>
              ×
            </button>
          </li>
        ))
      }
    </ul>
  )
};