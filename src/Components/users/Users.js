import React from "react";
import UserItem from "./User/UserItem";
import s from "./Users.module.css";

const Users = (props) => {
  let pageCount = Math.ceil(props.totalCount / props.pageSize);
  pageCount = 20;
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.item}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div>
        {props.users.map((user) => (
          <UserItem
            followingChanged={props.followingChanged}
            followingIsProgress={props.followingIsProgress}
            fullName={user.name}
            photo={user.photos}
            status={user.status}
            key={user.id}
            id={user.id}
            city="Minsk"
            country="Belarus"
            followed={user.followed}
            follow={props.follow}
            unfollow={props.unfollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
