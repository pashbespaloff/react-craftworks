import React from 'react';
import style from "./index.module.css";
import sections from './tabs';
import toKebabCase from '../helpers/toKebabCase';

const Navigation = ({ activeTabId, tabFunction }) => {
  return (
    <nav className={style.links}> 
      <ul>
        {
          sections.map(tab => (
            <li 
              key={toKebabCase(tab.name)}
              id={tab.id}
              className={tab.id === activeTabId && style.active}
              onClick={tabFunction}
            >
              {tab.name}
            </li>
          ))
        }
      </ul>
    </nav>
  )
};

export default Navigation;