import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import resetReducer from "./resetReducer";
import dataReducer from "./dataReducer";
import mapReducer from "./mapReducers";

export default combineReducers({
  auth: authReducer,
  reset: resetReducer,
  data: dataReducer,
  map: mapReducer
});
