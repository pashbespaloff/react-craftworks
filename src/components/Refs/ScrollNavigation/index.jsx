import React, {useRef} from 'react';
import Navigation from './Navigation';
import List from './List';

export default function ScrollNavigation() {
  const navRef = useRef(null);
  const listRef = useRef([]);

  const handleScroll = (element) => {
    element.scrollIntoView({
      block: "end",
      inline: "center",
      behavior: "smooth"
    });
  };

  const handleListScroll = (id) => {
    handleScroll(listRef.current.find(node => Number(node.id) === id))
  };

  const handleTopScroll = () => handleScroll(navRef.current);

  return (
    <>
      <Navigation handleScroll={handleListScroll} ref={navRef} />
      <List handleTopScroll={handleTopScroll} ref={listRef} />
    </>
  )
};