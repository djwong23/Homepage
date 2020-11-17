import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <h1 className="header">Welcome to Derek Wong's website.</h1>
      <h2 className="header">See my projects:</h2>
      <div className="buttonWrapper">
        <div style={{paddingBottom: "10px"}}>
          <a href="/TanningPlanning" className="buttons">
            Tanning Planning - Find out the best time to tan without damaging
            your skin.
          </a>
        </div>
        <div>
          <a href="/Ponere" className="buttons">
            Ponere - Fix your spine with a few stretches.
          </a>
        </div>
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </div>
  );
}

export default App;
