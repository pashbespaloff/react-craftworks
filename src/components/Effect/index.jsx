import React from 'react';
import H1 from "../../ui/Heading";
import LoadingBio from "./LoadingBio";
import bioStyle from "./LoadingBio/LoadingBio.module.css";
import TodoEffect from './TodoEffect';
import todoStyle from './TodoEffect/TodoEffect.module.css';

export default function Effect() {
  return (
    <>
      <div className={bioStyle.biobox}>
        <H1>loading bio</H1>
        <LoadingBio />
      </div>
      <div className={todoStyle.todobox}>
        <H1>todo + effect</H1>
        <TodoEffect />
      </div>
    </>
  );
};