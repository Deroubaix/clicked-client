import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/styles/questionnaire.css"


function QuestionCard(props) {
  let { data, onAnswerChange } = props;
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
    data = [];
  };

  /* return (
    <div className="questionnaire">
      <h3>{data.question}</h3>
      {data.answers.map((answer, index) => {
        return (
          <label class="answer-btn" key={index}>
            <input className="answers"
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
      <button className="next-btn"
        onClick={() => {
          onAnswerChange(selectedAnswer);
          setSelectedAnswer("");
        }}
      >
        Next
      </button>
    </div>
  ); */

  return (
    <div className="questionnaire">
      <h3 className="question">{data.question}</h3>
      {data.answers.map((answer, index) => {
        return (
          <label className="answer-btn" key={index}>
            <input
              className="answers"
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
        className="next-btn"
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
