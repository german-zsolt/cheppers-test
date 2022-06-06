import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import * as reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer, middleware: [sagaMiddleware] });
//TODO: sagaMiddleware.run(sagas);

export default store;
