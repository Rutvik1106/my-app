import Navbar from "./components/NavigationBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/HomePage/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
