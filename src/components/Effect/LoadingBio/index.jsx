import React, {useState, useEffect} from 'react';
import {fetchUsers} from "./api";
import List from "./List";
import Bio from './Bio';
import Loader from '../../../ui/Loader';
import style from "./LoadingBio.module.css";

export default function LoadingBio() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [bio, setBio] = useState(null);

  useEffect(() => {
    (async() => {
      setIsLoading(true);
      const data = await fetchUsers();
      if (data) {
        setUsers(data);
        setActiveUser(data[0]);
        setIsLoading(false);
      };
    })();
  }, []);

  return (
    <>
      {
        isLoading ? (
          <>
            <br /> 
            <div className={style.loaderbox}><Loader /></div>
          </>
          
        ) : (
          <>
            <List users={users} isLoading={isLoading} setUser={setActiveUser} />
            <hr/>
            <Bio user={activeUser} bio={bio} setBio={setBio} />
          </>
        )
      }
    </>
  )
};