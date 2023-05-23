import "./App.css";
import Profile from "./Components/profile/Profile";
import Dialogs from "./Components/dialogs/Dialogs";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import News from "./Components/news/News";
import Music from "./Components/music/Music";
import Settings from "./Components/settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav state={props.state.dialogs} />
        <div className="app__wrapper-content">
          <Routes>
            <Route
              path="/profile/*"
              element={
                <Profile state={props.state.profile} addPost={props.addPost} newPost={props.newPost}/>
              }
            />
            <Route
              path="/dialogs/*"
              element={<Dialogs state={props.state.dialogs} addMessage={props.addMessage} newMessage={props.newMessage} />}
            />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
