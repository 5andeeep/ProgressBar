import "./styles.css";
import Progressbar from "./components/Progressbar";
import { useState, useEffect } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="App">
      <span>Progress Bar</span>
      <Progressbar value={value} onComplete={() => setComplete(true)} />
      <span>{complete ? "Complete!" : "Loading..."}</span>
    </div>
  );
}
