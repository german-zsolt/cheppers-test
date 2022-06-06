import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { decode } from "html-entities";
import { Button, Card, Stack } from "react-bootstrap";
import { addAnswer } from "../../reducers/answersSlice";

const Texts = {
  pagination: "{index} of {total}",
  true: "True",
  false: "False",
};

const Quiz = ({ addAnswer, answeredAll, index, total, category, question }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (answeredAll) return navigate("/results");
  }, [answeredAll]);
  return (
    <Stack gap={5} className="col-md-5 mx-auto">
      <h1>{category}</h1>
      <Card>
        <Card.Body>
          <Card.Text>{question}</Card.Text>
        </Card.Body>
      </Card>
      <div>
        {Texts.pagination.replace("{index}", index).replace("{total}", total)}
      </div>
      <Button variant="success" onClick={() => addAnswer(true)}>
        {Texts.true}
      </Button>
      <Button variant="danger" onClick={() => addAnswer(false)}>
        {Texts.false}
      </Button>
    </Stack>
  );
};
Quiz.propTypes = {
  addAnswer: PropTypes.func,
  answeredAll: PropTypes.bool,
  index: PropTypes.number,
  total: PropTypes.number,
  category: PropTypes.string,
  question: PropTypes.string,
};

export default connect(
  ({ questions, answers }) => {
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
  { addAnswer }
)(Quiz);
