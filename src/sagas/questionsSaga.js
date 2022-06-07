import { call, takeEvery } from "redux-saga/effects";
import { IS_PROD } from "../utils";
import { setError } from "../reducers/errorSlice";
import { setQuestions } from "../reducers/questionsSlice";
import store from "../store";
import { QUESTIONS_REQUESTED } from "./actions";

const API_URL =
  "http://localhost:4000/api.php?amount=10&difficulty=hard&type=boolean";

function* addWatcher() {
  yield takeEvery(QUESTIONS_REQUESTED, fetchQuestions);
}

function* fetchQuestions() {
  try {
    const questions = yield IS_PROD
      ? fetch(API_URL)
      : import("../test_response.json");
    if (questions && 0 === questions.response_code && questions.results) {
      yield call(store.dispatch, setQuestions(questions.results));
    } else {
      yield call(
        store.dispatch,
        setError(new Error("Fetching the data is failed."))
      );
      IS_PROD || console.log(questions);
    }
  } catch (error) {
    yield call(store.dispatch, setError(error));
  }
}

export default addWatcher;
