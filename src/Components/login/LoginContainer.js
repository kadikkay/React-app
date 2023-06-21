import React from "react";
import { login, logout} from "../../redux/authReducer";
import { connect } from "react-redux";
import Login from "./Login";

class LoginConatiner extends React.Component {
  // componentDidMount() {
  //   this.props.getAuth(this.props.data)
  // }

  render() {
    return <Login {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {
  login,
  logout,
})(LoginConatiner);
