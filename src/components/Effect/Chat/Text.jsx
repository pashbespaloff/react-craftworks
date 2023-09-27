import React from 'react';
import style from "./Chat.module.css";

export default function Text({children}) {
  return <p className={style.text}>{children}</p>
};