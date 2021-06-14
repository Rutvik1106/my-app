import Navbar from "./components/NavigationBar/NavBar";
import Home from "./Pages/HomePage/Home";
import News from "./Pages/News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Login } from "./Pages/Login/login";
import { Register } from "./Pages/Login/register";
import Handle from "./Pages/Login/Handle";
import UpcomingEvent from "./Pages/UpcomingEvent/UpcomingEvent";
import EventCard from "./components/EventCard/EventCard";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upcomingEvents" component={UpcomingEvent} />
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
