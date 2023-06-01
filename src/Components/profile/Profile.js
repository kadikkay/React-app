import Posts from "./Posts/Posts";
import ProfileInfo from "./Posts/Profileinfo/Profileinfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <img
        className={s.img}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="#"
      />
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Profile;
