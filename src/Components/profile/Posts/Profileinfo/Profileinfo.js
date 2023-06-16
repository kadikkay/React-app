import Preloader from "../../../common/preloader/Preloader";
import s from "./Profileinfo.module.css";
import StatusContainer from "./Status/StatusContainer";

const ProfileInfo = (props) => {

  if (!props.dataProfile) {
    return <Preloader />
  }

  return (
    <div className={s.block}>
      <img
        className={s.image}
        src={
          props.dataProfile.photos.large != null
            ? props.dataProfile.photos.large
            : "https://img.championat.com/s/735x490/news/big/c/g/foto-rajan-gosling-v-obraze-kena-dlya-filma-barbi_16553112791320986632.jpg"
        }
        alt="#"
      />
      <div>
        <div className={s.title}>{props.dataProfile.fullName}</div>
        <StatusContainer userId={props.userId}/>
        <ul>
          <li>About me: {props.dataProfile.aboutMe}</li>
          <li>Education: {props.dataProfile.lookingForAJobDescription}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
