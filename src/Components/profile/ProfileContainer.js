import React from "react";
import { setProfile } from "../../redux/profileReducer";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/2`
      )
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }

  render() {
    debugger
    return (
      <div className={s.content}>
        <img
          className={s.img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="#"
        />
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    aboutMe: state.profile.aboutMe
  };
};

export default connect(mapStateToProps, {
  setProfile
})(ProfileContainer);
