import "./App.css";
import ProfileContainer from "./Components/profile/ProfileContainer";
import DialogsContainer from "./Components/dialogs/DialogsContainer";
import Nav from "./Components/nav/Nav";
import News from "./Components/news/News";
import Music from "./Components/music/Music";
import Settings from "./Components/settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./Components/users/UsersContainer";
import HeaderContainer from "./Components/header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app__wrapper-content">
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
