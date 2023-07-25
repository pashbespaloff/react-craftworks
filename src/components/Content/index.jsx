import React from 'react';
import sections from './sections';
import toKebabCase from '../helpers/toKebabCase';

const Content = ( {activeSection} ) => {
  return (
    <section className={toKebabCase(activeSection)}>
      {sections[activeSection].component}
    </section>
  )
};

export default Content;