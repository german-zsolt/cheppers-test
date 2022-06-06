import { takeEvery } from "redux-saga/effects";
import { setQuestions } from "../reducers/questionsSlice";
import store from "../store";
import { QUESTIONS_REQUESTED } from "./actions";

function* addWatcher() {
  yield takeEvery(QUESTIONS_REQUESTED, fetchQuestions);
}

function* fetchQuestions() {
  const questions = yield "production" === process.env.NODE_ENV
    ? fetch(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      )
    : import("../test_response.json");
  store.dispatch(setQuestions(questions));
}

export default addWatcher;
