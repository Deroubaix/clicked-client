import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { AuthContext } from "../context/auth.context";
import "/styles/questionnaire.css"


const questionData = [
  {
    question: "What color do you like?",
    answers: ["blue", "yellow", "red", "pink"],
  },
  {
    question: "What do you like doing?",
    answers: ["run", "laugh", "cry", "die"],
  },
  {
    question: "From something to something",
    answers: ["yes", "no", "for sure", "for real"],
  },
  {
    question: "What is what?",
    answers: ["i", "dont", "know", "anymore"],
  },
];
function Questionnaire() {
  const [answers, setAnswers] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  /*   const {id} = useParams() */

  const handleAnswerChange = (answer) => {
    if (currentStep <= questionData.length - 1) {
      setAnswers([...answers, answer]);
      if (currentStep < 3) setCurrentStep(currentStep + 1);
      else submitAnswers(answer);
    }
  };

  const submitAnswers = async (answer) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/questions/${user._id}`,
        { questionnaire: [...answers, answer] }
      );
      console.log(response.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  //You can delete this if you want
  useEffect(() => {

    console.log(answers);
    console.log(currentStep);
    console.log(questionData.length);
  }, [answers]);

  return (
    <section>
      <QuestionCard 
        data={questionData[currentStep]}
        onAnswerChange={handleAnswerChange}
      />
    </section>
  );
}

export default Questionnaire;
