import React, {useState} from 'react';
import {db} from "./api";
import List from "./List";
import Bio from './Bio';

export default function LoadingBio() {
  const users = Object.keys(db);
  const [user, setUser] = useState(users[0]);
  const [bio, setBio] = useState(null);

  return (
    <>
      <List users={users} setUser={setUser} />
      <hr/>
      <Bio activeUser={user} bio={bio} setBio={setBio} />
    </>
  )
};