import { useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Button, ListGroup } from "react-bootstrap";
import { decode } from "html-entities";
import { replace } from "../../utils";
import Template from "../Template";
import Loading from "../Loading";
import styles from "./Results.module.scss";

const Texts = {
  header: "You scored",
  result: "{points} / {total}",
  true: "True: ",
  false: "False: ",
  restartButton: "PLAY AGAIN?",
  title: {
    answer: {
      good: "Your answer was GOOD",
      bad: "Your answer was BAD",
    },
    correctAnswer: {
      true: "The correct answer was: True",
      false: "The correct answer was: False",
    },
    question: "Question {index} - {category}",
  },
};

const Results = ({ points, total, items }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (0 === total) navigate("/quiz");
  }, [total]);
  if (0 === total) return <Loading />;
  return (
    <Template>
      <h1>
        {Texts.header}
        <br />
        {replace(Texts.result, { points, total })}
      </h1>
      <ListGroup>
        <>
          {items.map(({ category, question, correctAnswer, isGood }, index) => (
            <ListGroup.Item
              key={index}
              className={classnames(
                styles.itemContainer,
                isGood ? "text-success" : "text-danger"
              )}
            >
              <div
                className={styles.icon}
                title={Texts.title.answer[isGood ? "good" : "bad"]}
              >
                {isGood ? "+" : "-"}
              </div>
              <div
                className={styles.correctAnswer}
                title={
                  Texts.title.correctAnswer[correctAnswer ? "true" : "false"]
                }
              >
                {correctAnswer ? Texts.true : Texts.false}
              </div>
              <div
                className={styles.question}
                title={replace(Texts.title.question, {
                  category,
                  index: index + 1,
                })}
              >
                {question}
              </div>
            </ListGroup.Item>
          ))}
        </>
      </ListGroup>
      <LinkContainer to="/">
        <Button>{Texts.restartButton}</Button>
      </LinkContainer>
    </Template>
  );
};
Results.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      question: PropTypes.string,
      correctAnswer: PropTypes.bool,
      isGood: PropTypes.bool,
    })
  ),
  points: PropTypes.number,
  total: PropTypes.number,
};

export default connect(({ questions, answers }) => {
  // prevent early access (cheating)
  if (!questions.results || answers.length < questions.results.length) {
    return { items: [], points: 0, total: 0 };
  }
  let points = 0;
  const items = questions.results.map(
    ({ category, question, correct_answer }, index) => {
      const correctAnswer = "True" === correct_answer;
      const isGood = correctAnswer === answers[index];
      if (isGood) ++points;
      return {
        category: decode(category),
        question: decode(question),
        correctAnswer,
        isGood,
      };
    }
  );
  return { items, points, total: questions.results.length };
})(Results);
