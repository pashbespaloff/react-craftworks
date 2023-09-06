import React, {forwardRef} from 'react';
import {grains} from "./grains";
import ListItem from './ListItem';
import style from "./ScrollNavigation.module.css";

export default forwardRef(
  function List(props, ref) {
    return (
      <ul className={style.list}>
        {
          grains.map(grain => (
            <li
              key={grain.id} 
              id={grain.id}
              ref={(node) => {
                (
                  !ref.current.find(item => Number(item.id) === grain.id)
                ) && ref.current.push(node)
              }}
            >
              <ListItem grain={grain} scrollToTop={props.handleTopScroll} />
            </li>
          ))
        }
      </ul>
    )
  }
)