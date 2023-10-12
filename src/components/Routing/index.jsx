import React, {useState} from 'react';
import H1 from "../../ui/Heading";
import { BrowserRouter } from 'react-router-dom';
import RoutingRoot from './RoutingRoot';
import style from "./Routing.module.css";
import Navigation from './Navigation';

export default function Routing() {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className={style.routerbox}>
        <H1>routing</H1>
        <Navigation isLoggedIn={isLoggedIn} setLogin={setLogin} />
        <RoutingRoot />
      </div>
    </BrowserRouter>
  )
};