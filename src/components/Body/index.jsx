import React from 'react';
import style from "./index.module.css";

const Body = ({ children }) => {
  
  return (
    <div className={style.body}>
      <main className={style.main}>
        <div className={style.main__container}>
          {children}
        </div>  
      </main>
    </div>
  )
};

export default Body;