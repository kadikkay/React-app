import React from "react";
import UserItem from "./User/UserItem";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";

const Users = ({totalCount, pageSize, onPageChanged, currentPage, ...props}) => {
  return (
    <div className={s.item}>
      <Paginator totalCount={totalCount} pageSize={pageSize} onPageChanged={onPageChanged} currentPage={currentPage} />
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
