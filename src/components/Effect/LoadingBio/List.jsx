import React from 'react';
import style from "./LoadingBio.module.css";

export default function List({isLoading, users, setUser}) {
  return (
    <select 
      className={style.userlist} 
      onChange={(e) => setUser(e.target.value)}
    >
      {
        !isLoading
          ? users.map(user => (
            <option key={user} value={user}>
              {user}
            </option>
          ))
          : <option></option>
      }
    </select>
  )
};