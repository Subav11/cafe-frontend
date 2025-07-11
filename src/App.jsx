import "./App.css";
import Home from "./components/Home.jsx";
import Temp from "./components/Temp.jsx";
import Game from "./components/Game.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
  //props - properties - to give arguments in our components
  //21 is a js expression and we write js exp inside a curly brace
  return (
    <div>
      {/* <Home name="John" age={21} /> */}
      {/* <Temp flag={true} /> */}
      {/* <Game/> */}
      <h1>SBY Cafe</h1>
      <Register/>
      <Login/>
      <h3>This is Footer</h3>
    </div>
  );
}

export default App;
