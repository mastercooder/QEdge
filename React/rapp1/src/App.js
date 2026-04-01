import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home />} />
        
        {/* Optional: /home route */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;