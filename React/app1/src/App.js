import "./App.css";
import Comp1 from "./Practice/Comp1";
import Comp2 from "./Practice/Comp2";
import Counter from "./Practice/Counter";
import PasArgToEvent from "./Practice/PasArgToEvent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React Application</h3>
      </header>
      <div className="div_1">
        <h3 className="app_h3">App.js</h3>
        <Comp1 className="Comp1"></Comp1>
        <Comp2 className="Comp2"></Comp2>
      </div>
      <div className="div_2">
        <Counter className="Counter"></Counter>
        <PasArgToEvent className="PasArg"></PasArgToEvent>
      </div>
    </div>
  );
}

export default App; // ---> use this or || export default || before funtion.
