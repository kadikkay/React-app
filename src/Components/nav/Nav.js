import { NavLink } from "react-router-dom";
import FriendsContainer from "../friends/FriendsContainer";
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
            to="/users"
            className={(navData) => (navData.isActive ? s.active : s.item)}
          >
            Users
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
        <FriendsContainer store={props.store} />
      </div>
    </nav>
  );
};

export default Nav;
