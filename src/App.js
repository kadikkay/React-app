import "./App.css";
import Profile from "./Components/profile/Profile";
import DialogsContainer from "./Components/dialogs/DialogsContainer";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import News from "./Components/news/News";
import Music from "./Components/music/Music";
import Settings from "./Components/settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./Components/users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav />
        <div className="app__wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile />} />
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
