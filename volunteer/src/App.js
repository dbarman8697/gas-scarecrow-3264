import "./App.css";
import AllPages from "./Components/AllPages";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Navbar/NavigationTop";

function App() {
  return (
    <div className="App">
      <Home />
      <AllPages />
      <Footer />
    </div>
  );
}

export default App;
