import { NavLink } from "react-router-dom";
import s from "./UserItem.module.css";
import axios from "axios";

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
            <button disabled={props.followingIsProgress.some(id => id === props.id)}
              onClick={() => {
                props.followingChanged(true, props.id)
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "29392b1b-14cc-49b0-8408-912b188af9ae"
                      }
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(props.id);
                    }
                    props.followingChanged(false, props.id)
                  });    
              }}
              className={s.btn}
            >
              unFollow
            </button>
          ) : (
            <button disabled={props.followingIsProgress.some(id => id === props.id)}
              onClick={() => {
                props.followingChanged(true, props.id)
                axios
                  .post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                    {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "29392b1b-14cc-49b0-8408-912b188af9ae"
                      }
                    }
                  )
                  .then((response) => {
                    if (response.data.resultCode === 0) {
                      props.follow(props.id);
                    }
                    props.followingChanged(false, props.id)
                  });
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
