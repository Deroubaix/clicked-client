import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Question3() {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswer = (value) => setSelectedAnswer(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/questions/${id}`,
        { questionnaire: { [selectedAnswer]: true } }
      );
      console.log(response.data);
      navigate('/question4');
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const buttonStyle = (value) => {
    if (selectedAnswer === value) {
      return { backgroundColor: 'red' };
    } else {
      return {};
    }
  };

  return (
    <section>
      <h1>Question 3</h1>
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

      <Link to="/question4">Next</Link>
    </section>
  );
}

export default Question3;