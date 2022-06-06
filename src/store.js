import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import * as reducer from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer, middleware: [sagaMiddleware] });
sagaMiddleware.run(sagas);

export default store;
