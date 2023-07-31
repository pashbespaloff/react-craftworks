import React, {useState} from 'react';
import Navigation from '../Navigation';
import Content from '../Content';
import tabs from '../Navigation/tabs';
import style from "./Body.module.css";

export default function Wrapper() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeTabTitle = tabs.find(tab => tab.id === Number(activeTabId)).title;

  return (
    <>
      <Navigation 
        activeTabId={activeTabId}
        setActiveTab={setActiveTabId}
      />
      <div className={style.main__container}>
        <div className={style.wrapper}>
          <Content activeSection={activeTabTitle} />
        </div>
      </div>        
    </>
  );
};