import React from 'react';
import Profile from './Profile';
import persons from './persons';

const Gallery = () => {
  
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

export default Gallery;