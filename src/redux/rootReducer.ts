import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import appReducer from "./slices/app";
import authReducer from "./slices/auth";

// ----------------------------------------------------------------------
const rootPersistConfig = {
  keyPrefix: "redux-",
  key: "root",
  storage,
  whitelist: [],
};

const authPersistConfig = {
  keyPrefix: "redux-",
  key: "auth",
  storage,
  whitelist: [],
};

const orgPersistConfig = {
  keyPrefix: "redux-",
  key: "org",
  storage,
  whitelist: ["orgId"],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export { rootPersistConfig, rootReducer };
