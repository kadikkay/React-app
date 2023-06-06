import React from "react";
import { setProfile } from "../../redux/profileReducer";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { userAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 29199;
    }

    userAPI.getProfile(userId).then((data) => {
      this.props.setProfile(data);
    });
  }

  render() {
    return (
      <div className={s.content}>
        <img
          className={s.img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="#"
        />
        <Profile {...this.props} dataProfile={this.props.dataProfile} />
      </div>
    );
  }
}

function withRouter(ProfileContainer) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <ProfileContainer {...props} router={{ location, navigate, params }} />
    );
  }

  return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {
  return {
    dataProfile: state.profile.dataProfile,
  };
};

export default connect(mapStateToProps, {
  setProfile,
})(withRouter(ProfileContainer));
