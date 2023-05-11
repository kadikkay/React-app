import s from "./Nav.module.css";

function Nav() {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <a href="#" className={`${s.item} ${s.active}`}>
            Profile
          </a>
        </li>
        <li>
          <a href="#" className={s.item}>
            Messages
          </a>
        </li>
        <li>
          <a href="#" className={s.item}>
            News
          </a>
        </li>
        <li>
          <a href="#" className={s.item}>
            Music
          </a>
        </li>
        <li>
          <a href="#" className={s.item}>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
