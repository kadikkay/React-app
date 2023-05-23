import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <NavLink
      to={"dialog/" + props.id}
      className={(navData) => (navData.isActive ? s.active : s.item)}
    >
      <img src={props.img} className={s.img} />
      {props.name}
    </NavLink>
  );
};

export default DialogItem;
