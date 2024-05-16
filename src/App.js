import { FaShuffle } from "react-icons/fa6";
import { useState } from "react";
import dictionary from "./dictionary";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleEnter(e) {
    e.preventDefault();
    if (dictionary.validAnswers.includes(inputValue)) {
      setCount((count) => count + 1);
      setInputValue("");
      setAnswers((prevAnswers) => [...prevAnswers, inputValue]);
    }
  }

  function handleButtonClick(letter) {
    setInputValue(inputValue + letter);
  }

  function handleDelete() {
    const textInput = [...inputValue];
    textInput.splice(-1, 1);
    setInputValue(textInput.join(""));
  }

  return (
    <div className="container">
      <h1 className="title">🐝 Spelling Bee</h1>
      <div className="game-board">
        <div className="found-answers">
          <p className="found-answers-count">You've found {count} answers</p>
          <ul className="answers-list">
            {answers.map((answer, id = crypto.randomUUID()) => (
              <li key={id}>{answer}</li>
            ))}
          </ul>
        </div>
        <div className="hive-container">
          <input
            typeof="text"
            className="text-input"
            value={inputValue}
            placeholder="Type or Click"
            onChange={handleInputChange}
          />
          <div className="hive">
            {dictionary.validLetters.map((letter) => (
              <svg
                key={letter}
                className="hive-cell center"
                viewBox="0 0 120 104"
                onClick={() => handleButtonClick(letter)}
              >
                <polygon
                  className="cell-fill"
                  points="0,52 30,0 90,0 120,52 90,104 30,104"
                  strokeWidth="7.5"
                />
                <text className="cell-letter" x="50%" y="50%" dy="10.75%">
                  {letter}
                </text>
              </svg>
            ))}
          </div>
          <div className="hive-actions">
            <button onClick={handleDelete}>Delete</button>
            <button>
              <FaShuffle />
            </button>
            <button onClick={handleEnter}>Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
