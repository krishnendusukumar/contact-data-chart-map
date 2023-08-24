import {
    legacy_createStore as createStore,
} from "redux";
import rootReducer from "./redux/reducers/rootReducer";

export const store = createStore(rootReducer)