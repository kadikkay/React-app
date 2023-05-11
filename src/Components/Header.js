import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg"
        alt="#"
      />
    </header>
  );
}

export default Header;
