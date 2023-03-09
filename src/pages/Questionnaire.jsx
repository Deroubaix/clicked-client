import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

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
    answers: ["1", "2", "3", "4"],
  },
];
function Questionnaire() {
  const [answers, setAnswers] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleAnswerChange = (answer) => {
    if (currentStep < questionData.length - 1) {
      setAnswers([...answers, answer]);
      setCurrentStep(currentStep + 1);
    } else {
      /* alert("end of the questionnaire"); */
       submitAnswers()
    }
  };

  const submitAnswers = async (e) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/questions/${id}`,
        { questionnaire: answers }
      );
      console.log(response.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

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
