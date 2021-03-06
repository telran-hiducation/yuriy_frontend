import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import AboutUs from "./components/AboutUs/AboutUs";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";


function App() {
  return (
      <div>
        <Navbar/>
        <Home/>
        <Products/>
        <AboutUs/>
        <Team/>
        <Contact/>
      </div>
  );
}

export default App;
