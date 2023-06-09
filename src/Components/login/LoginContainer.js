import React from "react";
import { setAuthUserData, getAuth } from "../../redux/authReducer";
import { connect } from "react-redux";
import Header from "./Login";

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
})(HeaderContainer);
