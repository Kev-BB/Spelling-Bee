"use client";

import React from "react";
import { useState, useEffect } from "react";
import dictionaryTR from "@/dictionaryTR";

const page = () => {
  const STARTING_TIME = 60;
  const STARTING_SCORE = 0;
  const [timerRunning, setTimerRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(STARTING_TIME);
  const [score, setScore] = useState(STARTING_SCORE);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (timerRunning && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
    if (!timeLeft) {
      alert(`Puanınız ${score}`);
      setTimerRunning(false);
      setTimeLeft(STARTING_TIME);
      setScore(STARTING_SCORE);
      setHasStarted(false);
    }
  }, [timeLeft, timerRunning]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleEnter(e) {
    e.preventDefault();
    if (dictionaryTR.validAnswers.includes(inputValue)) {
      if (inputValue.length > 1 && inputValue.length <= 4) {
        setScore((prevscore) => prevscore + 1);
      } else if (inputValue.length > 4 && inputValue.length <= 5) {
        setScore((prevscore) => prevscore + 5);
      } else if (inputValue.length > 5 && inputValue.length <= 6) {
        setScore((prevscore) => prevscore + 6);
      } else if (inputValue.length > 6 && inputValue.length <= 7) {
        setScore((prevscore) => prevscore + 7);
      }
      setCount((count) => count + 1);
      setInputValue("");
      setAnswers((prevAnswers) => [...prevAnswers, inputValue]);
      setTimeLeft((prevtime) => prevtime + 15);
    } else {
      alert("Kelime cevap listesinde bulunmuyor");
    }
  }

  function handleButtonClick(letter) {
    setInputValue(inputValue + letter);
    if (!hasStarted) {
      setHasStarted(true);
      setTimerRunning(true);
    }
  }

  function handleDelete() {
    const textInput = [...inputValue];
    textInput.splice(-1, 1);
    setInputValue(textInput.join(""));
  }
  return (
    <div className="container">
      <div className="score-board">
        <h2 className="score">Puan: {score} </h2>
        <h2 className="time">Zaman: {timeLeft}</h2>
      </div>
      <div className="game-board">
        <div className="found-answers">
          <p className="found-answers-count">{count} Cevap buldunuz.</p>
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
            placeholder="Yazın veya Tıklayın"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="hive">
            {dictionaryTR.validLetters.map((letter) => (
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
            <button onClick={handleDelete}>Silin</button>
            <button onClick={handleEnter}>Giriş</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
