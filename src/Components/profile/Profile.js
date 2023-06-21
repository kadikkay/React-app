import Posts from "./Posts/Posts";
import ProfileInfo from "./Posts/Profileinfo/Profileinfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo
        dataProfile={props.dataProfile}
        updateStatus={props.updateStatus}
        status={props.status}
      />
      <Posts />
    </div>
  );
};

export default Profile;
