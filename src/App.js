import Home from './pages/Home'
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
