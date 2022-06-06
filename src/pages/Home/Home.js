import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Template from "../Template";
import { connect } from "react-redux";
import { resetAnswers } from "../../reducers/answersSlice";
import { resetQuestions } from "../../reducers/questionsSlice";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Texts = {
  header: "Welcome to the Trivia Challenge",
  body: "You will be presented with 10 True or False questions.",
  footer: "Can you score 100%?",
  startButton: "BEGIN",
};

const Home = ({ resetAnswers }) => {
  useEffect(() => {
    resetAnswers();
    //resetQuestions();
  }, []);
  return (
    <Template>
      <h1>{Texts.header}</h1>
      <h2>{Texts.body}</h2>
      <h2>{Texts.footer}</h2>
      <LinkContainer to="/quiz">
        <Button variant="primary" size="lg">
          {Texts.startButton}
        </Button>
      </LinkContainer>
    </Template>
  );
};
Home.propTypes = {
  resetAnswers: PropTypes.func,
  resetQuestions: PropTypes.func,
};

export default connect(null, { resetAnswers, resetQuestions })(Home);
