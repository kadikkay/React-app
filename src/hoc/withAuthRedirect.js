import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to={"/login"} />;
    }
    return <Component {...props} />;
  };

  let ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectAuthRedirectComponent;
};
