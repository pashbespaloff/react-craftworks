import React, {useReducer} from "react";
import {chatReducer} from "./chatReducer";
import {dialogues} from "./dialogues";
import UserSelect from "./UserSelect";
import MessageInput from "./MessageInput";
import SendMessageButton from "./SendMessageButton";

export default function Chat() {
  const [chatData, chatDataDispatch] = useReducer(chatReducer, dialogues);
  const activeUser = chatData.find(user => user.active === true);

  return (
    <>
      <UserSelect users={chatData} activeUser={activeUser} dispatch={chatDataDispatch} />
      <MessageInput activeUser={activeUser} dispatch={chatDataDispatch} />
      <SendMessageButton activeUser={activeUser} dispatch={chatDataDispatch} />
    </>
  )
};