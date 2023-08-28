import React from 'react';
import style from "./Chat.module.css";

export default function MessageInput({activeUser, dispatch}) {
  return (
    <textarea 
      className={style.message} 
      value={activeUser.message} 
      placeholder="..."
      onChange={
        (e) => dispatch({
          type: "messageEdit", 
          payload: {activeUserId: activeUser.id, message: e.target.value}
        })
    }
    />
  )
};