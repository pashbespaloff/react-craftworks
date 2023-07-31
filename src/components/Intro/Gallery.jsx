import React from 'react';
import Profile from './Profile';
import persons from './persons';

export default function Gallery() {
  return (
    <>
      {
        persons.map(person => (
          <Profile key={persons.indexOf(person)} person={person}/>
        ))
      }
    </>
  )
};