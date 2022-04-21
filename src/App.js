import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Autonomie from './components/pages/Autonomie';
import Application from "./components/pages/Application";
import Demo from './components/pages/Demo';

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/autonomie' element={<Autonomie />} />
        <Route path='/application' element={<Application />} />
        <Route path='/demo' element={<Demo />} />
      </Routes>

    </Router>
  );
}

export default App;
