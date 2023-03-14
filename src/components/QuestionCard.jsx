import React, { useState } from "react";
import { Link } from "react-router-dom";

function QuestionCard(props) {
  let { data, onAnswerChange } = props;
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
    data = [];
  };

  return (
    <div>
      <h3>{data.question}</h3>
      {data.answers.map((answer, index) => {
        return (
          <label key={index}>
            <input
              type="radio"
              name="answer"
              value={answer}
              id={`answer-${index}`}
              onChange={handleChange}
              checked={selectedAnswer === answer}
            />
            <span>{answer}</span>
          </label>
        );
      })}
      <button
        onClick={() => {
          onAnswerChange(selectedAnswer);
          setSelectedAnswer("");
        }}
      >
        Next
      </button>
    </div>
  );
}


export default QuestionCard;
