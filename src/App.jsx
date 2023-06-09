import './App.css';
import {BrowserRouter as
    Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages'
import SigninPage from "./pages/singin";


const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/singin' element={<SigninPage />} />
        </Routes>
    </Router>
  );
}

export default App;
