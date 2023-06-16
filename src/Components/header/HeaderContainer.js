import React from "react";
import { setAuthUserData, getAuth,logout } from "../../redux/authReducer";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuth(this.props.data)
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
  getAuth,
  logout,
})(HeaderContainer);
