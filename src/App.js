import React, { Suspense } from "react";
import "./App.css";
import Nav from "./Components/nav/Nav";
import News from "./Components/news/News";
import Music from "./Components/music/Music";
import Settings from "./Components/settings/Settings";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import UsersContainer from "./Components/users/UsersContainer";
import HeaderContainer from "./Components/header/HeaderContainer";
import LoginContainer from "./Components/login/LoginContainer";
import { initializeApp } from "./redux/appReducer";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import Preloader from "./Components/common/preloader/Preloader";
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(() =>
  import("./Components/dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./Components/profile/ProfileContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <BrowserRouter>
          <div className="app__wrapper">
            <HeaderContainer />
            <Nav />
            <div className="app__wrapper-content">
              <Suspense
                fallback={
                  <div>
                    <Preloader />
                  </div>
                }
              >
                <Routes>
                  <Route
                    path="/profile/:userId?"
                    element={<ProfileContainer />}
                  />
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/news/*" element={<News />} />
                  <Route path="/music/*" element={<Music />} />
                  <Route path="/users/*" element={<UsersContainer />} />
                  <Route path="/settings/*" element={<Settings />} />
                  <Route path="/login/*" element={<LoginContainer />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
}

// function withRouter(App) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//       <App {...props} router={{ location, navigate, params }} />
//     );
//   }
//   return ComponentWithRouterProp;
// }

let mapStateToProps = (state) => {
  return {
    initialized: state.initialize.initialazed,
  };
};

let AppContainer = compose(
  // withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);

export const MainApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  );
};
