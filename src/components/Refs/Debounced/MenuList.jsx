import React from 'react';
import {menu} from "./menu";
import MenuItem from './MenuItem';
import style from "./Debounced.module.css";

export default function MenuList({cook, stopCooking}) {
  return (
    <ul className={style.menu}>
      {
        menu.map(dish => (
          <li
            key={dish.id} 
            id={dish.id}
          >
            <MenuItem dish={dish} cook={cook} stopCooking={stopCooking} />
          </li>
        ))
      }
    </ul>
  )
};