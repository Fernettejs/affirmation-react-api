import "./App.css";
import Button from "./components/Button";
import Affirmation from "./components/Affirmation";

function App() {
  return (
    <div className="content">
      <Affirmation />
      <Button text="Affirm Me" />
    </div>
  );
}

export default App;
