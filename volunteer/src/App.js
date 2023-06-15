import "./App.css";
import Homepage from "./pages/Homepage";
import Volunteer from "./pages/Volunteer";

function App() {
  const customStyle = {
    backgroundColor: "#FFFFFF" /* Replace with your desired color */,
  };

  return (

    <div style={customStyle} >
      {/* <Homepage /> */}
      <Volunteer />
    </div>
  );
}

export default App;
