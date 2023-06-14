import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  const customStyle = {
    backgroundColor: "#FFFFFF" /* Replace with your desired color */,
  };

  return (
    <div style={customStyle} >
      <Homepage />
    </div>
  );
}

export default App;
