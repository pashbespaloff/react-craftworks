import React from 'react';
import style from "./LoadingBio.module.css";

export default function List({users, setUser}) {
  return (
    <select 
      className={style.userlist} 
      onChange={(e) => setUser(e.target.value)}>
      {
        users.map(user => (
          <option key={user} value={user}>
            {user}
          </option>
        ))
      }
    </select>
  )
};