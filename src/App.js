import "./App.css";
import Profile from "./Components/Profile";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="app__wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
