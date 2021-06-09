import Navbar from "./components/NavigationBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/HomePage/Home';
import News from './Pages/News/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import UpcomingEvent from "./Pages/UpcomingEvent/UpcomingEvent";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upcomingEvents" exact component={UpcomingEvent} />
        <Route path="/news" exact component={News} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
