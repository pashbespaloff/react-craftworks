import React from 'react';
import H1 from "../../ui/Heading";
import TodoReduced from './TodoReduced';
import Chat from './Chat';
import ContextBackgroundSwitch from './ContextBackgroundSwitch';
import todoStyle from './TodoReduced/TodoReduced.module.css';
import chatStyle from './Chat/Chat.module.css';
import contextStyle from './ContextBackgroundSwitch/Context.module.css';

export default function ReducerAndContext() {
  return (
    <>
      <div className={todoStyle.todobox}>
        <H1>todo x reducer</H1>
        <TodoReduced />
      </div>

      <div className={chatStyle.chatbox}>
        <H1>chat</H1>
        <Chat />
      </div>

      <div className={contextStyle.switchbox}>
        <H1>context switch</H1>
        <ContextBackgroundSwitch />
      </div>
    </>
  )
};