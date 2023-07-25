import React, {useState} from 'react';
import sections from './sections';
import toKebabCase from '../helpers/toKebabCase';
import toPascalCase from '../helpers/toPascalCase';
import style from "./index.module.css";

const Tabs = () => {
  const [tabs, setActiveTab] = useState(sections);

  const switchActiveTab = (targetTab) => {
    const updatedState = tabs.map(tab => {
      tab.isActive = (toKebabCase(tab.name) === targetTab.id) ? true : false;
      return tab;
    });

    setActiveTab(updatedState);
  };

  const getActiveSection = toPascalCase(tabs.find(section => section.isActive === true).name);

  const TabsComponent = (
    <ul>
      {
        tabs.map(tab => (
          <li 
            key={toKebabCase(tab.name)}
            id={toKebabCase(tab.name)}
            className={tab.isActive && style.active}
            onClick={(e) => switchActiveTab(e.target)}
          >
            {tab.name}
          </li>
        ))
      }
    </ul>
  );

  return [getActiveSection, TabsComponent];
};

export default Tabs;