// NOTE: use this store variable to create a store.
import {combineReducers, legacy_createStore, applyMiddleware} from "redux"
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";

const rootReducer=combineReducers({AppReducer, AuthReducer})
const store =legacy_createStore(rootReducer, applyMiddleware(thunk))

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
