import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
        <Route path='/HIVE_WEBSITE/' exact element={<Home />} />
        <Route path='/HIVE_WEBSITE/autonomie' element={<Autonomie />} />
        <Route path='/HIVE_WEBSITE/application' element={<Application />} />
        <Route path='/HIVE_WEBSITE/demo' element={<Demo />} />
      </Routes>

    </Router>
  );
}

export default App;
