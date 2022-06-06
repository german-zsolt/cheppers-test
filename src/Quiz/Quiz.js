import { useState } from "react";
import data from "../test_response.json";
import QuizItem from "./QuizItem";
import { decode } from "html-entities";

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const handleAnswer = () => setQuestionIndex(questionIndex + 1);
  const { category, question } = data.results[questionIndex];
  return (
    <QuizItem
      category={decode(category)}
      question={decode(question)}
      handleAnswer={handleAnswer}
    />
  );
};

export default Quiz;
