import "./App.css";

import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";

function App() {
  const customStyle = {
    backgroundColor: "#FFFFFF" /* Replace with your desired color */,
  };

  return (
    <div className="App">
      {/* <Homepage /> */}
      <Volunteer />
      <div style={customStyle}>
        <Home />
      </div>
    </div>
  );
}

export default App;
