import React, {useState} from 'react';
import style from "./ToggleBgImg.module.css";

export default function ToggleBgImg() {
  const [background, setBackground] = useState("red");

  const setRedBackground = () => setBackground("red");
  const setTransparentBackground = (e) => {
    e.stopPropagation();
    setBackground("transparent");
  };

  const isRed = background === "red";

  return (
    <div 
      className={`${style.background} ${isRed ? style.background__active : null}`}
      onClick={() => setRedBackground()}
    >
      <img
        className={`${style.img} ${!isRed ? style.img__active : null}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => setTransparentBackground(e)}
      />
    </div>
  );
}