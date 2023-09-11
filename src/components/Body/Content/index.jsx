import React from 'react';
import {sections} from './sections';
import toKebabCase from '../../helpers/toKebabCase';
import toPascalCase from '../../helpers/toPascalCase';

export default function Content({ activeSection }) {
  return (
    <section className={toKebabCase(activeSection)}>
      {sections[toPascalCase(activeSection)].component}
    </section>
  )
};