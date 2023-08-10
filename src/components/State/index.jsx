import React from 'react';
import H1 from "../../ui/Heading";
import ToggleBgImg from './ToggleBgImg';
import Clock from './Clock';
import toggleStyle from './ToggleBgImg/ToggleBgImg.module.css';
import clockStyle from "./Clock/Clock.module.css";
import {time} from '../helpers/currentDate';

export default function State() {
  return (
    <>
      <div className={toggleStyle.togglebox}>
        <H1>css classes</H1>
        <ToggleBgImg />
      </div>

      <div className={clockStyle.clockbox}>
        <H1>updating props</H1>
        <Clock initColor="white" time={time}/>
      </div>
    </>
  )
};