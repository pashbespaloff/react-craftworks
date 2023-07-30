import React from 'react';
import sections from './sections';
import toKebabCase from '../helpers/toKebabCase';
import toPascalCase from '../helpers/toPascalCase';

const Content = ({ activeSection }) => {
  return (
    <section className={toKebabCase(activeSection)}>
      {sections[toPascalCase(activeSection)].component}
    </section>
  )
};

export default Content;