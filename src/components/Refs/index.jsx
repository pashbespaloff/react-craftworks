import React from 'react';
import H1 from "../../ui/Heading";
import ScrollNavigation from "./ScrollNavigation";
import Debounced from './Debounced';
import scrollStyle from "./ScrollNavigation/ScrollNavigation.module.css";
import cookStyle from "./Debounced/Debounced.module.css";

export default function Refs() {
  return (
    <>
      <div className={scrollStyle.scrollbox}>
        <H1>scroll navigation</H1>
        <ScrollNavigation />
      </div>
      <div className={cookStyle.cookbox}>
        <H1>debounced</H1>
        <Debounced />
      </div>
    </>
  );
};