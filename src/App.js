import "./styles.css";
import { useState } from "react";

export default function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [operation, setOperation] = useState("");

  const digitLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const addOperation = (evt) => {
    const op = evt.target.dataset["op"];
    setOperation(op);
  };

  const performOperation = () => {
    if (x && y) {
      switch (operation) {
        case "+":
          setX(x + y);
          break;

        case "-":
          setX(x - y);
          break;

        case "x":
          setX(x * y);
          break;

        case "/":
          setX(x / y);
          break;

        default:
          break;
      }
      setY(0);
      setOperation("");
      return;
    }
  };

  const addOperator = (evt) => {
    const digit = Number(evt.target.dataset["int"]);
    if (operation !== "") {
      setY(y * 10 + digit);
    } else setX(x * 10 + digit);
  };

  const clearOperation = () => {
    setX(0);
    setY(0);
  };

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div className="result">{operation !== "" ? y : x}</div>
      {digitLabels.map((digit) => (
        <button key={`index-${digit}`} onClick={addOperator} data-int={digit}>
          {digit}
        </button>
      ))}

      <div>
        <button onClick={addOperation} data-op="+">
          +
        </button>
        <button onClick={addOperation} data-op="-">
          -
        </button>
        <button onClick={addOperation} data-op="x">
          x
        </button>
        <button onClick={addOperation} data-op="/">
          /
        </button>

        <button onClick={performOperation}> = </button>
        <button onClick={clearOperation}> C </button>
      </div>
    </>
  );
}
