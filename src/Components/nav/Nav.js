import { NavLink } from "react-router-dom";
import Friends from "../friends/Friends";
import s from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dialogs"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Messages
          </NavLink>
        </li> 
        <li>
          <NavLink
            to="/news"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Settings
          </NavLink>
        </li>
      </ul>
      <div>
        <Friends state={props.state} />
      </div>
    </nav>
  );
};

export default Nav;
