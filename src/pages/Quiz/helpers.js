import { decode } from "html-entities";

export const getAnsweredAll = ({ questions, answers }) => {
  const index = answers.length;
  const total = questions.results.length;
  return { answeredAll: total <= index };
};

export const getPagination = ({ questions, answers }) => {
  const index = answers.length + 1;
  const total = questions.results.length;
  return { index, total };
};

export const getCurrentQuestion = ({ questions, answers }) => {
  const index = answers.length;
  const questionItem = questions.results[index];
  return {
    category: decode(questionItem?.category),
    question: decode(questionItem?.question),
  };
};

export const mapStateToProps = (state) => {
  if (!state.questions.results) return { noQuestions: true };
  return {
    ...getAnsweredAll(state),
    ...getPagination(state),
    ...getCurrentQuestion(state),
  };
};
