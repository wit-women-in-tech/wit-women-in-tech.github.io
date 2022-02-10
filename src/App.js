import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import Events from "./Pages/Events/Events";
import Resources from "./Pages/Resources/Resources";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Dashboard/Mentee/Dashboard";

import NavbarFun from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <NavbarFun />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/testimonial" element={<Testimonial />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
