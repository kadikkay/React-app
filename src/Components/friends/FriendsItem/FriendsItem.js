import { NavLink } from "react-router-dom";
import s from "./FriendsItem.module.css";

const FriendsItem = (props) => {
  return (
    <NavLink
      to={"dialog/" + props.id}
      className={s.item}
    >
      <img src={props.img} className={s.img} />
    </NavLink>
  );
};

export default FriendsItem;
