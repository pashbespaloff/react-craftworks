import React from 'react';
import {chatRooms} from "./chatRooms";
import Text from './Text';
import style from "./Chat.module.css";

export default function ChatRoomsSelect({setActiveChatRoom}) {
  return (
    <select className={style.select} onChange={(e) => setActiveChatRoom(e.target.value)}>
      {
        chatRooms.map(chatRoom => 
          <option key={chatRoom} value={chatRoom}>{chatRoom}</option>
        )
      }
    </select>
  )
};