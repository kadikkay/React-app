import { NavLink } from "react-router-dom";
import s from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <div className={s.item}>
      <div className={s.block}>
        <NavLink to={"/profile/" + props.id}>
          <img
            src={
              props.photo.small != null
                ? props.photo.small
                : "https://img.championat.com/s/735x490/news/big/c/g/foto-rajan-gosling-v-obraze-kena-dlya-filma-barbi_16553112791320986632.jpg"
            }
          />
        </NavLink>
        <div>
          {props.followed ? (
            <button
              onClick={() => {
                props.unfollow(props.id);
              }}
              className={s.btn}
            >
              unFollow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(props.id);
              }}
              className={s.btn}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div>{props.fullName}</div>
      <div>{props.status}</div>
      <div>{props.city}</div>
      <div>{props.country}</div>
    </div>
  );
};

export default UserItem;
