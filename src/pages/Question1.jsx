/* import React, {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom' */

/* function Question1() {

    const [answer1, setAnswer1] = useState(false)
    const [answer2, setAnswer2] = useState(false)
    const [answer3, setAnswer3] = useState(false)
    const [answer4, setAnswer4] = useState(false)
    const [answer5, setAnswer5] = useState(false)
    const [answer6, setAnswer6] = useState(false)
 
    const handleAnswer1 = (e) => setAnswer1(e.target.value)
    const handleAnswer2 = (e) => setAnswer2(e.target.value)
    const handleAnswer3 = (e) => setAnswer3(e.target.value)
    const handleAnswer4 = (e) => setAnswer4(e.target.value)
    const handleAnswer5 = (e) => setAnswer5(e.target.value)
    const handleAnswer6 = (e) => setAnswer6(e.target.value)


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Determine which answer button was clicked
        const selectedButton = e.target.id;
      
        // Determine the value of the selected answer
        let selectedAnswer;
        switch (selectedButton) {
          case "answer1":
            selectedAnswer = answer1;
            break;
          case "answer2":
            selectedAnswer = answer2;
            break;
          case "answer3":
            selectedAnswer = answer3;
            break;
          case "answer4":
            selectedAnswer = answer4;
            break;
          case "answer5":
            selectedAnswer = answer5;
            break;
          case "answer6":
            selectedAnswer = answer6;
            break;
          default:
            selectedAnswer = "";
        }
      
        try {
          const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/api/questions/${id}`,
            { questionnaire: { [selectedButton]: selectedAnswer } }
          );
          console.log(response.data);
          navigate("/question2");
        } catch (error) {
          console.log(error);
        }
      };

    const navigate = useNavigate()
   
  return (
    <section>
    <h1>Question 1</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Question1</label>

        <button type="radio" name='answer1' id='answer1' value={answer1} onClick={handleAnswer1}>Answer1</button>
        <button type="radio" name='answer2' id='answer2' value={answer2} onClick={handleAnswer2}>Answer2</button>
        <button type="radio" name='answer3' id='answer3' value={answer3} onClick={handleAnswer3}>Answer3</button>
        <button type="radio" name='answer4' id='answer4' value={answer4} onClick={handleAnswer4}>Answer4</button>
        <button type="radio" name='answer5' id='answer5' value={answer5} onClick={handleAnswer5}>Answer5</button>
        <button type="radio" name='answer6' id='answer6' value={answer6} onClick={handleAnswer6}>Answer6</button>
        
    
    </form>
   
    <Link to="/question2">Next</Link>
    </section>
  )
} */



/* 
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Question1() {

  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswer1 = (e) => setSelectedAnswer(e.target.value);
  const handleAnswer2 = (e) => setSelectedAnswer(e.target.value);
  const handleAnswer3 = (e) => setSelectedAnswer(e.target.value);
  const handleAnswer4 = (e) => setSelectedAnswer(e.target.value);
  const handleAnswer5 = (e) => setSelectedAnswer(e.target.value);
  const handleAnswer6 = (e) => setSelectedAnswer(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/questions/${id}`,
        { questionnaire: { [selectedAnswer]: true } }
      );
      console.log(response.data);
      navigate('/question2');
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
      <h1>Question 1</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Question1</label>

        <button
          type="button"
          name="answer1"
          id="answer1"
          value="answer1"
          onClick={handleAnswer1}
          style={buttonStyle('answer1')}
        >
          Answer1
        </button>
        <button
          type="button"
          name="answer2"
          id="answer2"
          value="answer2"
          onClick={handleAnswer2}
          style={buttonStyle('answer2')}
        >
          Answer2
        </button>
        <button
          type="button"
          name="answer3"
          id="answer3"
          value="answer3"
          onClick={handleAnswer3}
          style={buttonStyle('answer3')}
        >
          Answer3
        </button>
        <button
          type="button"
          name="answer4"
          id="answer4"
          value="answer4"
          onClick={handleAnswer4}
          style={buttonStyle('answer4')}
        >
          Answer4
        </button>
        <button
          type="button"
          name="answer5"
          id="answer5"
          value="answer5"
          onClick={handleAnswer5}
          style={buttonStyle('answer5')}
        >
          Answer5
        </button>
        <button
          type="button"
          name="answer6"
          id="answer6"
          value="answer6"
          onClick={handleAnswer6}
          style={buttonStyle('answer6')}
        >
          Answer6
        </button>
      </form>

      <Link to="/question2">Next</Link>
    </section>
 )
}
export default Question1 */


import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Question1() {
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
      navigate('/question2');
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
  );
}

export default Question1;