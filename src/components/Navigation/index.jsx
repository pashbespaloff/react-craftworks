import React from 'react';
import sections from './tabs';
import style from "./index.module.css";

const Navigation = ({ activeTabId, setActiveTab }) => {
  return (
    <nav className={style.links}> 
      <ul>
        {
          sections.map(tab => (
            <li 
              key={tab.id}
              id={tab.id}
              className={tab.id === Number(activeTabId) && style.active}
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

export default Navigation;