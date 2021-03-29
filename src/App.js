import "./App.css";
import Router from "./components/Router";
import { findLastWord } from "./utils/FindLastWord";
import GameLoop from "../src/components/GameLoop/GameLoop.css";

function App() {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
