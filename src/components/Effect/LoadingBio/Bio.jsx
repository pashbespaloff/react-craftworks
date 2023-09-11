import React, {useEffect} from 'react';
import {fetchBio} from './api';
import Loader from '../../../ui/Loader';
import style from "./LoadingBio.module.css";

export default function Bio({user, bio, setBio}) {
  useEffect(() => {
    setBio(null);
    (async() => {
      const activeUserBio = await fetchBio(user);
      setBio(activeUserBio);
    })();
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