import React, {useState} from 'react';
import Navigation from '../Navigation';
import Content from '../Content';
import tabs from '../Navigation/tabs';
import style from "./Body.module.css";

export default function Wrapper() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabTitle = tabs.find(item => item.id === Number(activeTab)).title;

  return (
    <>
      <Navigation 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className={style.main__container}>
        <div className={style.wrapper}>
          <Content activeSection={activeTabTitle} />
        </div>
      </div>        
    </>
  );
};