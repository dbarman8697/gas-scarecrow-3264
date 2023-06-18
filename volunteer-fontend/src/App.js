import "./App.css";
import AllPages from "./Components/AllPages";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Navbar/NavigationTop";
import Events from "./pages/Events";

function App() {
  return (
    <div className="App">
      <Home />
      <AllPages />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
