import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from "./Routing.module.css";

export default function Navigation({isLoggedIn, setLogin}) {
  const navigate = useNavigate();

  const handleLoggingIn = () => {
    if (!isLoggedIn) {
      setLogin(true);
      alert("you are logged in");
    }
  };

  const handleLoggingOut = () => {
    if (isLoggedIn) {
      setLogin(false);
      alert("you are logged out");
      navigate("../");
    }
  };

  return (
    <>
      <ul className={style.linklist}>
        <li className={style.link}>
          <Link to="/react-craftworks/public">cake recipe</Link>
        </li>
        {isLoggedIn &&
          <li className={style.link}>
            <Link to="/react-craftworks/secret">methedrone recipe</Link>
          </li>
        }
      </ul>

      <button onClick={handleLoggingIn} className={style.button}>log in</button>
      <button onClick={handleLoggingOut} className={style.button}>log out</button>
    </>
  )
};