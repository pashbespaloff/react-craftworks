import React, {useState} from 'react';
import style from './SpriteJump.module.css';

export default function SpriteJump() {
  const [slide, setSlide] = useState(slides[0]);

  const animateJump = (n) => {
    if (n === 5) return;

    setTimeout(() => {
      setSlide(slides[n + 1]);
      animateJump(n + 1);
    }, 100);
  };

  return (
    <div className={style.jumpwrapper} onClick={() => animateJump(0)}>
      <div className={`${style.jump} ${slide}`}>
      </div>
    </div>
  )
};

const slides = [
  `${style.slide0}`,
  `${style.slide1}`,
  `${style.slide2}`,
  `${style.slide3}`,
  `${style.slide4}`,
  `${style.slide5}`
];