import React, {forwardRef} from 'react';
import {grains} from "./grains";
import style from "./ScrollNavigation.module.css";

export default forwardRef(
  function Navigation(props, ref) {
    return (
      <nav className={style.navigation} ref={ref}>
        {
          grains.map(grain => (
            <button 
              key={grain.id} 
              className={style.button}
              onClick={() => props.handleScroll(grain.id)}
            >
              {grain.title}
            </button>
          ))
        }
      </nav>
    )
  }
)