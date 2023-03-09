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

/*   return (

    <section>
      <h1>Question 1</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Question1</label>

        <button
          type="button"
          name="answer1"
          id="answer1"
          value="answer1"
          onClick={() => handleAnswer('answer1')}
          style={buttonStyle('answer1')}
        >
          Answer1
        </button>
        <button
          type="button"
          name="answer2"
          id="answer2"
          value="answer2"
          onClick={() => handleAnswer('answer2')}
          style={buttonStyle('answer2')}
        >
          Answer2
        </button>
        <button
          type="button"
          name="answer3"
          id="answer3"
          value="answer3"
          onClick={() => handleAnswer('answer3')}
          style={buttonStyle('answer3')}
        >
          Answer3
        </button>
        <button
          type="button"
          name="answer4"
          id="answer4"
          value="answer4"
          onClick={() => handleAnswer('answer4')}
          style={buttonStyle('answer4')}
        >
          Answer4
        </button>
        <button
          type="button"
          name="answer5"
          id="answer5"
          value="answer5"
          onClick={() => handleAnswer('answer5')}
          style={buttonStyle('answer5')}
        >
          Answer5
        </button>
        <button
          type="button"
          name="answer6"
          id="answer6"
          value="answer6"
          onClick={() => handleAnswer('answer6')}
          style={buttonStyle('answer6')}
        >
          Answer6
        </button>

        <button type="submit">Submit</button>
      </form>

      <Link to="/question2">Next</Link>
    </section>
  ) */

export default QuestionCard;
