import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/styles/questionnaire.css"

function QuestionCard(props) {
  const { data, onAnswerChange } = props;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
    setIsAnswerSelected(true);
  };

  return (
    <div className="questionnaire">
      <h1 className="question">{data.question}</h1>
      {data.answers.map((answer, index) => {
        return (
          <label
            className="answer-btn"
            key={index}
            style={
              selectedAnswer === answer
                ? {
                    backgroundColor: "#F8EBDF",
                    border: "2px solid #CBABF7",
                  }
                : {}
            }
            onClick={() => {
              setSelectedAnswer(answer);
              setIsAnswerSelected(true);
            }}
          >
            <input
              className="answers"
              type="radio"
              name="answer"
              value={answer}
              id={`answer-${index}`}
              onChange={handleChange}
              checked={selectedAnswer === answer}
            />
            <p className="the-answer">
              <span>{answer}</span>
            </p>
          </label>
        );
      })}
      <button
        className="next-btn"
        onClick={() => {
          onAnswerChange(selectedAnswer);
          setSelectedAnswer("");
          setIsAnswerSelected(false);
        }}
        disabled={!isAnswerSelected}
      >
        Next
      </button>
    </div>
  );
}



export default QuestionCard;
