import "./App.css";
import Comp1 from "./components/pages/Comp1";
import Comp2 from "./components/pages/Comp2";
import Counter from "./components/pages/Counter";
import PasArgToEvent from "./components/pages/PasArgToEvent";
import { Routes, Route, Link } from "react-router-dom"
import Student from "./components/pages/Student";
import StyleComp1 from "./components/pages/StyleComp1";
import ReadText from "./components/pages/ReadText";
import CondRend from "./components/pages/CondRend";


function App() {
  return (
    <div className="App">

      {/* 🔗 Navigation */}
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link> |{" "}
        <Link to="/student" className="nav-link">Student</Link> | {" "}
        <Link to="/styleComp" className="nav-link">StyleComp</Link> | {" "}
        <Link to="/readtext" className="nav-link">ReadText</Link> | {" "}
        <Link to="/condrend" className="nav-link">CondRend</Link>
      </nav>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <header className="App-header">
                <h3>React Application</h3>
              </header>

              <div className="div_1">
                <h3 className="app_h3">App.js</h3>
                <Comp1 className="Comp1" />
                <Comp2 className="Comp2" />
              </div>

              <div className="div_2">
                <Counter className="Counter" />
                <PasArgToEvent className="PasArg" />
              </div>
            </>
          }
        />

        {/* STUDENT PAGE */}
        <Route path="/student" 
          element={
            <>
              <Student className="Student_page" />
            </>
          }         
        />

        {/* STYLE COMPONENT */}
          <Route path = "styleComp"
            element={
              <>
                <StyleComp1 className="Style_Comp"/>
              </>
            }
          />

          {/* READ TEXT */}
          <Route path = "/readtext"
          element={
            <>
            <ReadText className = "Read_Text"/>
            </>
          }
          />

          {/* CONDITIONAL RENDER */}
          <Route path = "/condrend"
          element={
            <>
              <CondRend className="Cond_Rend"/> 
            </>
          }
          />
      </Routes>
    </div>
  );
} 

export default App; // ---> use this or || export default || before funtion.
