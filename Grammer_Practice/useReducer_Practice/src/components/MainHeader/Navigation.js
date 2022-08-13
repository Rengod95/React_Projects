import React, { useContext} from 'react';
import classes from './Navigation.module.css';
import AuthContext from "../../Auth-Context/auth-context";

const Navigation = (props) => {
    const authCTX = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {authCTX.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authCTX.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authCTX.isLoggedIn && (
          <li>
            <button onClick={authCTX.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
