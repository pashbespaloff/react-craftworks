import React, {useState} from 'react';
import Navigation from '../Navigation';
import Content from '../Content';
import tabs from '../Navigation/tabs';
import toPascalCase from '../helpers/toPascalCase';
import style from "../Body/index.module.css";

const Wrapper = () => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeTabName = toPascalCase(tabs.find(tab => tab.id === Number(activeTabId)).name);

  return (
    <>
      <Navigation 
        activeTabId={activeTabId}
        tabFunction={(e) => setActiveTabId(e.target.id)}
      />
      <div className={style.main__container}>
        <div className={style.wrapper}>
          <Content activeSection={activeTabName} />
        </div>
      </div>        
    </>
  );
};

export default Wrapper;