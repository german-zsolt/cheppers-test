import { call } from "redux-saga/effects";
import questionsSaga from "./questionsSaga";

function* addSagas() {
  yield call(questionsSaga);
}

export default addSagas;
