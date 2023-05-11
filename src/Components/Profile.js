import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.content}>
      <img
        className={s.img}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="#"
      />
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
      <div className={s.posts}>
        <div className={s.new}>
          <span>New post</span>
          <textarea placeholder="My text..." className={s.text}></textarea>
        </div>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
}

export default Profile;
