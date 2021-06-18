import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import BootstrapNavbar from "./components/BootstrapNavbar";
import Contact from "./components/Contact";
//import Home from "./components/Home";
import Predictor from "./components/Predictor";
import Footer from "./components/AppFooter";
import Api1 from "./components/Api1";



function App() {
  return (
    <Router>
      <BootstrapNavbar />

      <Route exact path="/">
        <Predictor />
      </Route>
      <Route path="/Contact" component={Contact} />
      <Route path="/About" component={About} />
      <Route path="/Predictor" component={Predictor} />
    < Footer />
    <Api1 />

    </Router>
  );
}

export default App;
