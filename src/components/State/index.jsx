import React from 'react';
import H1 from "../../ui/Heading";
import ToggleBgImg from './ToggleBgImg';
import Clock from './Clock';
import Counter from './Counter';
import PackingList from './PackingList';
import SpriteJump from './SpriteJump';
import toggleStyle from './ToggleBgImg/ToggleBgImg.module.css';
import clockStyle from "./Clock/Clock.module.css";
import counterStyle from "./Counter/Counter.module.css";
import packingStyle from "./PackingList/PackingList.module.css";
import jumpingStyle from "./SpriteJump/SpriteJump.module.css";

export default function State() {
  return (
    <>
      <div className={toggleStyle.togglebox}>
        <H1>css classes</H1>
        <ToggleBgImg />
      </div>

      <div className={clockStyle.clockbox}>
        <H1>updating props</H1>
        <Clock />
      </div>

      <div className={counterStyle.counterbox}>
        <H1>counter</H1>
        <Counter />
      </div>

      <div className={packingStyle.packingbox}>
        <H1>packing list</H1>
        <PackingList />
      </div>

      <div className={jumpingStyle.jumpbox}>
        <H1>sprite jump</H1>
        <SpriteJump />
      </div>
    </>
  );
};