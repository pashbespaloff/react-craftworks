import React from 'react';
import Profile from './Profile';
import persons from './persons';

const Gallery = () => {
  
  return (
    <>
      {
        persons.map(person => (
          <Profile key={person.name} person={person}/>
        ))
      }
    </>
  )
};

export default Gallery;