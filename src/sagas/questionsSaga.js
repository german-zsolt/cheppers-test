import { call, takeEvery } from "redux-saga/effects";
import { IS_PROD } from "../utils";
import { setError } from "../reducers/errorSlice";
import { setQuestions } from "../reducers/questionsSlice";
import store from "../store";
import { QUESTIONS_REQUESTED } from "./actions";

const MOCK_URL =
  "http://[::1]:4000/api.php?amount=10&difficulty=hard&type=boolean";
const PROD_URL =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

function* addWatcher() {
  yield takeEvery(QUESTIONS_REQUESTED, fetchQuestions);
}

function* fetchQuestions() {
  try {
    const questions = yield fetch(IS_PROD ? PROD_URL : MOCK_URL).then((resp) =>
      resp.json()
    );
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
