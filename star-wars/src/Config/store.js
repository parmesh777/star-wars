import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import searchReducer from "../reducers/searchPageReducer";
import loginReducer from "../reducers/loginPageReducer";

const rootReducer = combineReducers({
  form: reduxFormReducer,
  searchReducer,
  loginReducer,
});
const store = createStore(rootReducer);

export default store;
