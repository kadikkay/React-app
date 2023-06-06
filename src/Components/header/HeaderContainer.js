import React from "react";
import { setAuthUserData } from "../../redux/authReducer";
import { connect } from "react-redux";
import Header from "./Header";
import { userAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuth()
      .then((data) => {
        if (data.resultCode === 0) {
          this.props.setAuthUserData(data.data);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps, {
  setAuthUserData,
})(HeaderContainer);
