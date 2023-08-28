import React from 'react';
import style from "./Chat.module.css";

export default function UserSelect({users, activeUser, dispatch}) {
  return (
    <div className={style.selector}>
      <label 
        className={style.label}
        htmlFor="chat-user-select"
      >
        to:
      </label>
      
      <select 
        id="chat-user-select"
        className={style.select}
        value={activeUser.id}
        onChange={(e) => dispatch({
          type: "userSelect", 
          payload: Number(e.target.value)
          })
        }
      >
        {
          users.map((user) => (
            <option key={user.id} value={user.id}>{user.to}</option>
          ))
        }
      </select>
    </div>
  )
};