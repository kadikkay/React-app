import { NavLink, Navigate } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  // if (props.authData.isAuth !== true) {
  //   return <Navigate to="/login" />
  // }

  return (
    <header className={s.header}>
      <img
        src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
        alt="#"
      />
      <div className={s.login__block}>
        {props.authData.isAuth === true ? (
          <div>
            <span>{props.authData.login}</span>
            <button onClick={props.logout}>Log Out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
