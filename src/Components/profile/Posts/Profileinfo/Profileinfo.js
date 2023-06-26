import Preloader from "../../../common/preloader/Preloader";
import EditWindowRedaxForm from "./EditWindow/EditWindow";
import s from "./Profileinfo.module.css";
import StatusWithHooks from "./Status/StatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.dataProfile) {
    return <Preloader />;
  }
  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const editWondowVisible = () => {
    return <EditWindowRedaxForm />
  }

  return (
    <div className={s.block}>
      <div>
        <img
          className={s.image}
          src={
            props.dataProfile.photos.large != null
              ? props.dataProfile.photos.large
              : "https://img.championat.com/s/735x490/news/big/c/g/foto-rajan-gosling-v-obraze-kena-dlya-filma-barbi_16553112791320986632.jpg"
          }
          alt="#"
        />
        {props.isOwner && (
          <button className={s.btn} onClick={editWondowVisible()}>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 1276.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#3D8599"
                stroke="none"
              >
                <path
                  d="M11145 12790 c-302 -78 -364 -99 -510 -172 -120 -60 -213 -119 -320
         -203 -44 -35 -2232 -2216 -4861 -4847 l-4782 -4783 -107 -405 c-60 -223 -116
         -434 -126 -470 -26 -100 -219 -818 -236 -880 -32 -123 -44 -167 -122 -457
         l-81 -302 0 -135 0 -136 136 0 135 0 302 81 c166 45 325 87 352 94 28 8 86 23
         130 35 44 12 231 62 415 111 184 50 358 96 385 104 28 7 221 59 430 115 l380
         101 4871 4872 c4810 4811 4872 4873 4947 4987 75 114 170 299 202 395 163 480
         55 946 -313 1360 -200 225 -440 389 -687 468 -107 34 -157 44 -307 62 -136 16
         -186 17 -233 5z m-230 -667 c69 -198 215 -426 398 -621 37 -40 67 -77 65 -82
         -2 -4 -363 -362 -803 -795 -440 -433 -939 -926 -1110 -1094 -170 -169 -614
         -606 -985 -971 -371 -365 -821 -809 -1000 -985 -179 -177 -806 -796 -1395
         -1375 -1928 -1899 -2435 -2399 -2825 -2785 -1279 -1266 -1278 -1265 -1327
         -1286 -71 -31 -189 -59 -247 -59 -75 0 -113 24 -170 105 -130 187 -151 289
         -97 465 18 55 37 138 43 183 l11 82 4546 4548 c2500 2502 4572 4569 4604 4594
         64 50 234 153 253 153 6 0 24 -35 39 -77z m774 -942 c156 -100 296 -155 438
         -175 l83 -11 -30 -64 c-17 -35 -55 -102 -86 -150 -50 -77 -563 -593 -4719
         -4750 l-4663 -4664 -83 -18 c-104 -23 -238 -24 -308 -3 -103 30 -168 124 -198
         287 -13 76 -12 281 2 295 2 3 10 0 17 -6 10 -8 176 151 698 666 377 371 984
         970 1350 1331 366 360 832 820 1035 1021 204 201 681 671 1060 1045 672 662
         965 950 1695 1671 195 192 796 784 1335 1315 539 530 1274 1255 1635 1611 360
         356 657 647 659 648 2 0 38 -22 80 -49z m-10547 -8670 c-10 -151 61 -332 210
         -528 43 -56 123 -117 178 -134 84 -26 260 -28 323 -4 15 7 17 -2 17 -98 0
         -300 120 -528 325 -617 28 -12 91 -29 142 -39 l91 -16 -666 -178 c-367 -98
         -671 -177 -677 -177 -5 1 -62 62 -125 137 -63 74 -141 166 -174 204 l-58 69
         187 702 c135 505 193 709 208 726 11 12 21 22 22 22 1 0 0 -31 -3 -69z"
                />
              </g>
            </svg>
          </button>
        )}
        {/* <input type="file" className={s.btn} onChange={mainPhotoSelected} /> */}
      </div>
      <div>
        <div className={s.title}>{props.dataProfile.fullName}</div>
        <StatusWithHooks
          updateStatus={props.updateStatus}
          status={props.status}
        />
        <ul>
          <li>About me: {props.dataProfile.aboutMe}</li>
          <li>Education: {props.dataProfile.lookingForAJobDescription}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
