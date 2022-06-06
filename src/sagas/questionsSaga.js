import { takeEvery } from "redux-saga/effects";
import { setQuestions } from "../reducers/questionsSlice";
import store from "../store";
import { QUESTIONS_REQUESTED } from "./actions";

function* addWatcher() {
  yield takeEvery(QUESTIONS_REQUESTED, fetchQuestions);
}

function* fetchQuestions() {
  const questions = yield import("../test_response.json");
  store.dispatch(setQuestions(questions));
}

export default addWatcher;
