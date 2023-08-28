import React from 'react';
import style from "./Chat.module.css";

export default function SendMessageButton({activeUser, dispatch}) {
  const sendMessage = () => {
    setTimeout(
      () => {
        alert(`you've just sent "${activeUser.message}" to ${activeUser.to}`);
        dispatch({
          type: "setNewMessage", 
          payload: activeUser.id
        })
      },
      666
    )
  };

  return (
    <button className={style.send} onClick={sendMessage}>
      send message to {activeUser.to}
    </button>
  )
};