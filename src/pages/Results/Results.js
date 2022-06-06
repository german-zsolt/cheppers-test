import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Button, ListGroup } from "react-bootstrap";
import { replace } from "../../utils";
import Template from "../Template";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../Loading";

const Texts = {
  header: "You scored",
  result: "{points} / {total}",
  true: "True: ",
  false: "False: ",
  restartButton: "PLAY AGAIN?",
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
        {items.map(({ question, correctAnswer, isGood }, index) => (
          <ListGroup.Item
            key={index}
            className={isGood ? "text-success" : "text-danger"}
          >
            {isGood ? "+" : "-"}
            {correctAnswer ? Texts.true : Texts.false}
            {question}
          </ListGroup.Item>
        ))}
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
  const items = questions.results.map(({ question, correct_answer }, index) => {
    const correctAnswer = "True" === correct_answer;
    const isGood = correctAnswer === answers[index];
    if (isGood) ++points;
    return { question, correctAnswer, isGood };
  });
  return { items, points, total: questions.results.length };
})(Results);
