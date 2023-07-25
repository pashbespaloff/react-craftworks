import React from 'react';
import style from "./index.module.css";
import Tabs from './Tabs';

const Navigation = () => {
  return (
    <nav className={style.links}>
      <Tabs />
    </nav>
  )
};

export default Navigation;