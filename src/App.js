import Navbar from "./components/NavigationBar/NavBar";
import Home from "./Pages/HomePage/Home";
import News from "./Pages/News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import UpcomingEvent from "./Pages/UpcomingEvent/UpcomingEvent";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={UpcomingEvent} />
        <Route path="/contactus" component={News} />
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} /> */}
        {/* <Route path="/adminhome" component={AdminHome} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
