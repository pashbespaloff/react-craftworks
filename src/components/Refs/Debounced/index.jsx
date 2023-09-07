import React, {useState, useRef} from 'react';
import {menu} from "./menu";
import MenuList from './MenuList';

export default function Debounced() {
  const [dishes, setDishes] = useState(menu);
  const timerRef = useRef(new Array(dishes.length));

  const getDish = (id) => dishes.find(dish => dish.id === id);

  const cook = (id) => {
    const dish = getDish(id);
    setDishes([...dishes, dish.isCooking = true]);
    
    clearTimeout(timerRef.current[id]);

    timerRef.current[id] = setTimeout(() => {
      setDishes([...dishes, dish.isCooking = false]);
      alert(`${dish.title} is ready, bon appetite`);
    }, 3000);
  };

  const stopCooking = (id) => {
    const dish = getDish(id);
    clearTimeout(timerRef.current[id]);
    setDishes([...dishes, dish.isCooking = false]);
  };

  return <MenuList cook={cook} stopCooking={stopCooking} />
};