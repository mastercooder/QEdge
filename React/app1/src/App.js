import "./App.css";
import Comp1 from "./components/pages/Comp1";
import Comp2 from "./components/pages/Comp2";
import Counter from "./components/pages/Counter";
import PasArgToEvent from "./components/pages/PasArgToEvent";
import { Routes, Route, Link } from "react-router-dom";
import Student from "./components/pages/Student";
import StyleComp1 from "./components/pages/StyleComp1";
import ReadText from "./components/pages/ReadText";
import CondRend from "./components/pages/CondRend";
import StudentDashbord from "./Assignmentes/Student Database/pages/StudentDashbord";
import Course from "./Assignmentes/Search Course/pages/CourseDashboard";
import FragComp1 from "./components/pages/FragComp1";
import Contax101 from "./components/pages/Context101";
import CallApi from "./components/pages/CallApi";
import Parent from "./components/pages/Parent";
import BsComp1 from "./components/pages/BsComp1";

function App() {
  return (
    <div className="App">
      {/* 🔗 Navigation */}
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>{" "}
        |{" "}
        <Link to="/student" className="nav-link">
          Student
        </Link>{" "}
        |{" "}
        <Link to="/styleComp" className="nav-link">
          StyleComp
        </Link>{" "}
        |{" "}
        <Link to="/readtext" className="nav-link">
          ReadText
        </Link>{" "}
        |{" "}
        <Link to="/condrend" className="nav-link">
          CondRend
        </Link>{" "}
        |{" "}
        <Link to="/assignment1" className="nav-link">
          Assignments
        </Link>{" "}
        |{" "}
        <Link to="/course" className="nav-link">
          Course Details
        </Link>{" "}
        |{" "}
        <Link to="/fragComp" className="nav-link">
          FragComp
        </Link>{" "}
        |{" "}
        <Link to="/contaxt" className="nav-link">
          Contaxt
        </Link>{" "}
        |{" "}
        <Link to="/callapi" className="nav-link">
          CallApi
        </Link>{" "}
        |{" "}
        <Link to="/parent" className="nav-link">
          Parent
        </Link>{" "}
        |{" "}
        <Link to="/bscomp" className="nav-link">BsComp</Link>
      </nav>

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <h1 className="App-header">React Application</h1>

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
        <Route
          path="/student"
          element={
            <>
              <Student className="Student_page" />
            </>
          }
        />

        {/* STYLE COMPONENT */}
        <Route
          path="styleComp"
          element={
            <>
              <StyleComp1 className="Style_Comp" />
            </>
          }
        />

        {/* READ TEXT */}
        <Route
          path="/readtext"
          element={
            <>
              <ReadText className="Read_Text" />
            </>
          }
        />

        {/* CONDITIONAL RENDER */}
        <Route
          path="/condrend"
          element={
            <>
              <CondRend className="Cond_Rend" />
            </>
          }
        />

        {/* Assignment */}
        <Route
          path="/assignment1"
          element={
            <>
              <StudentDashbord className="Student_Dashboard" />
            </>
          }
        />

        {/* COURSE DEATILS */}
        <Route path="/course" element={<Course />} />

        {/* FRAGEMENT COMPONENET */}
        <Route path="/fragComp" element={<FragComp1 className="Frag_Comp" />} />

        {/* CONTAXT 101, 102, 103, 104 */}
        <Route path="/contaxt" element={<Contax101 />} />

        {/* CALL API */}
        <Route path="/callapi" element={<CallApi />} />

        {/* PARENT | CHILD | IMGCOMP1 | IMGCOMP2*/}
        <Route path="/parent" element={<Parent/>} />

        {/* BOOTSTRAP COMPONENET */}
        <Route path="/bscomp" element={<BsComp1/>} />
      </Routes>
    </div>
  );
}

export default App; // ---> use this or || export default || before funtion.
