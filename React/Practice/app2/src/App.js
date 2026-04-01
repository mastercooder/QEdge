import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Fcomp1 from "./components/pages/Fcomp1.jsx";
import Fcomp6 from "./components/pages/Fcomp6.jsx";

function App() {
  return (
    <>
      <div className="navbar d-flex justify-content-center align-items-center m-2">
        <Link to="/" className="nav-link me-2">Home</Link>
        <Link to="/fcomp" className="nav-link me-2">
          Fcomp
        </Link>
        <Link to="/fcomp6" className="nav-link me-2">Fcomp6</Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1 className="AppHeader text-center">React Application</h1>
            </div>
          }
        />

        <Route path="/fcomp" element={<Fcomp1 />} />
        <Route path="/fcomp6" element={<Fcomp6/>}/>
      </Routes>
    </>
  );
}

export default App;
