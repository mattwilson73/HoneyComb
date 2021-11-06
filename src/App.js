import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import honeycomb from "./pages/honeycomb";
import Classlist from "./pages/Classlist";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/honeycomb" exact component={honeycomb} />
          <Route path="/classlist" exact component={Classlist} />
          <Route path="/calendar" exact component={Calendar} />
          <Route path="/" exact component={Login} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
