import React from 'react';
import sections from './tabs';
import style from "./Navigation.module.css";

export default function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className={style.links}> 
      <ul>
        {
          sections.map(tab => (
            <li 
              key={tab.id}
              id={tab.id}
              className={tab.id === Number(activeTab) ? style.active : null}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </li>
          ))
        }
      </ul>
    </nav>
  )
};