/** @format */
import "./App.css";
import logo from "./img/WhatsApp Image 2023-06-21 at 19.26.20.jpeg";
import buzzle from "./img/buzzle-01.png";
function App() {
  return (
    <div>
      <div className="textcont">
        <text className="text">Coming soon !</text>
        <img className="buzzle" src={buzzle} alt="buzzle" />
      </div>

      <div>
        <img className="imglogo" src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default App;
