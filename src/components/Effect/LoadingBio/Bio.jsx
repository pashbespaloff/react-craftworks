import React, {useEffect} from 'react';
import {fetchBio} from './api';
import Loader from '../../../ui/Loader';
import style from "./LoadingBio.module.css";

export default function Bio({activeUser, bio, setBio}) {
  useEffect(() => {
    setBio(null);
    fetchBio(activeUser)
      .then(activeUserBio => setBio(activeUserBio))
  }, [activeUser, setBio]);

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