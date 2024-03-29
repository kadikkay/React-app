import React from "react";
import {
  setProfile,
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import s from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div className={s.content}>
        {/* <img
          className={s.img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="#"
        /> */}
        <Profile
          {...this.props}
          dataProfile={this.props.dataProfile}
          userId={this.props.router.params.userId}
        />
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
    status: state.profile.status,
    userId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, {
    setProfile,
    getProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
