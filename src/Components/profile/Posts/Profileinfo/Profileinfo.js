import s from "./Profileinfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.block}>
      <img
        className={s.image}
        src="https://static.fotor.com/app/minitools/aiimage/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"
        alt="#"
      />
      <div>
        <div className={s.title}>Arkadii Prudnikov</div>
        <ul>
          <li>Date of birth:</li>
          <li>City:</li>
          <li>Education:</li>
          <li>Web Site:</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileInfo;
