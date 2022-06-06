import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";
import { Button, Card } from "react-bootstrap";
import { replace } from "../../utils";
import { addAnswer } from "../../reducers/answersSlice";
import { requestQuestions } from "../../sagas/actions";
import Loading from "../Loading";
import Template from "../Template";

const Texts = {
  pagination: "{index} of {total}",
  true: "True",
  false: "False",
};

const Quiz = ({
  noQuestions,
  requestQuestions,
  addAnswer,
  answeredAll,
  index,
  total,
  category,
  question,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (noQuestions) requestQuestions();
  }, [noQuestions]);
  useEffect(() => {
    if (answeredAll) return navigate("/results");
  }, [answeredAll]);
  if (noQuestions) return <Loading />;
  return (
    <Template>
      <h1>{category}</h1>
      <Card>
        <Card.Body>
          <Card.Text>{question}</Card.Text>
        </Card.Body>
      </Card>
      <div>{replace(Texts.pagination, { index, total })}</div>
      <Button variant="success" onClick={() => addAnswer(true)}>
        {Texts.true}
      </Button>
      <Button variant="danger" onClick={() => addAnswer(false)}>
        {Texts.false}
      </Button>
    </Template>
  );
};
Quiz.propTypes = {
  noQuestions: PropTypes.bool,
  requestQuestions: PropTypes.func,
  addAnswer: PropTypes.func,
  answeredAll: PropTypes.bool,
  index: PropTypes.number,
  total: PropTypes.number,
  category: PropTypes.string,
  question: PropTypes.string,
};

export default connect(
  ({ questions, answers }) => {
    if (!questions.results) return { noQuestions: true };
    const index = answers.length;
    const total = questions.results.length;
    const answeredAll = total <= index;
    const questionItem = questions.results[index];
    return {
      answeredAll,
      index: index + 1,
      total,
      category: decode(questionItem?.category),
      question: decode(questionItem?.question),
    };
  },
  { requestQuestions, addAnswer }
)(Quiz);