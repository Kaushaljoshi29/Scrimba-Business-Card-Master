import "./App.css";
import ProfileInfo from "./components/ProfileInfo";
import ProfileAbout from "./components/ProfileAbout"
import ProfileInterest from "./components/ProfileInterest";
import ProfileFooter from "./components/ProfileFooter"

function App() {
  return (
    <div className="App">
      <div className="container">
        <ProfileInfo />
        <ProfileAbout />  
        <ProfileInterest />
        <ProfileFooter />
      </div>
    </div>
  );
}

export default App;
