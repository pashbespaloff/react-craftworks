import React from 'react';
import Body from './components/Body';
import Navigation from './components/Navigation';
import Wrapper from './components/Wrapper';
// import switchSection from './components/Wrapper/switchSection';
// import logo from './logo.svg';

function App() {
  return (
    <Body>
      <Navigation />
      <Wrapper />
    </Body>
  );
}

export default App;