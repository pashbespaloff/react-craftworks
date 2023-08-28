import React, {useState} from 'react';
import Body from './components/Body';
import Wrapper from './components/Body/Wrapper';
import {BackgroundContext} from './components/ReducerAndContext/ContextBackgroundSwitch/backgroundContext';
import "./reset.css";
// import logo from './logo.svg';

function App() {
  const [background, setBackground] = useState("wheat");

  return (
    <Body>
      <BackgroundContext.Provider value={{background, setBackground}}>
        <Wrapper />
      </BackgroundContext.Provider>
    </Body>
  );
}

export default App;