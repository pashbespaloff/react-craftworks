import React from 'react';
import H2 from '../../../ui/Subheading';
import style from "./ScrollNavigation.module.css";

export default function ListItem({grain, scrollToTop}) {
  return (
    <>
      <H2>{grain.title}</H2>
      <p className={style.text}>{grain.text}</p>
      <button className={style.button} onClick={scrollToTop}>
        ↑ back to top ↑
      </button>
    </>
  )
};