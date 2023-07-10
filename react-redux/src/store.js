import {legacy_createStore as createStore,applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { reducers } from "./redux/reducers";

const rootReducer=combineReducers({
    data:reducers
})

export const store=createStore(rootReducer,applyMiddleware(thunk));