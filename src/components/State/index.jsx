import React from 'react';
import H1 from "../../ui/Heading";
import ToggleBgImg from './ToggleBgImg';
import style from './ToggleBgImg/ToggleBgImg.module.css';

export default function State() {
  return (
    <>
      <div className={style.togglebox}>
        <H1>css classes</H1>
        <ToggleBgImg />
      </div>
    </>
  )
};