import React from 'react';
import style from "./index.module.css";
import TabsComponent from './Tabs';

const Navigation = () => {
  return (
    <nav className={style.links}>
      <TabsComponent />
    </nav>
  )
};

export default Navigation;