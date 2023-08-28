import React, {useState, useContext} from 'react';
import Navigation from './Navigation';
import Content from './Content';
import tabs from './Navigation/tabs';
import style from "./Body.module.css";
import {BackgroundContext} from "../ReducerAndContext/ContextBackgroundSwitch/backgroundContext";

export default function Wrapper() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabTitle = tabs.find(tab => tab.id === Number(activeTab)).title;

  const context = useContext(BackgroundContext);
  const mainStyle = `${style.main__container} ${context.background === "wheat" ? style.wheat : style.corn}`;

  return (
    <>
      <Navigation 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <div className={mainStyle}>
        <div className={style.wrapper}>
          <Content activeSection={activeTabTitle} />
        </div>
      </div> 
    </>
  );
};