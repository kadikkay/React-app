import FriendsItem from "./FriendsItem/FriendsItem";
import s from "./Friends.module.css";

const Friends = (props) => {
  let friendsElem = props.state.dialogData.map((dialog) => (
    <FriendsItem img={dialog.img} id={dialog.id} />
  ));

  return (
    <div>
      <div className={s.title}>Friends</div>
      <div className={s.content}>{friendsElem}</div>
    </div>
  );
};

export default Friends;
