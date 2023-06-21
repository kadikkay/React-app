import React from "react";
import { logout } from "../../redux/authReducer";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {

  

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
  logout,
})(HeaderContainer);
