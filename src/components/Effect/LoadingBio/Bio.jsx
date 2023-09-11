import React, {useEffect} from 'react';
import {fetchBio} from './api';
import Loader from '../../../ui/Loader';
import style from "./LoadingBio.module.css";

export default function Bio({user, bio, setBio}) {
  useEffect(() => {
    let ignore = false;
    setBio(null);

    (async() => {
      const activeUserBio = await fetchBio(user);
      if (activeUserBio && !ignore) setBio(activeUserBio);
    })();

    return () => ignore = true;
  }, [user, setBio]);

  return (
    <>
      {
        bio
          ? <p className={style.userbio}>{bio}</p>
          : <div className={style.loaderbox}><Loader /></div>
      }
    </>
  )
};