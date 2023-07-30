import React from 'react';
import style from "./Body.module.css";

const Body = ({ children }) => {
  
  return (
    <div className={style.body}>
      <main className={style.main}>
        {children}
      </main>
    </div>
  )
};

export default Body;