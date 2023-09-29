import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import logger from "redux-logger-simple";
import { persistStore, persistReducer } from "redux-persist";
import storageLocal from "redux-persist/lib/storage";
import authReducer from "./Reducers/authReducer";
import HeartDiseasePredictionReducer from "./Reducers/HeartDiseasePredictionReducer";
import searchReducer from "./Reducers/searchReducer";

const persistConfig = {
  key: "root",
  timeout: null,
  storage: storageLocal,
  whitelist: ["auth","formHeart","search"],
  blacklist: [],
};
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(logger));
const reducers = combineReducers({
    auth : authReducer,
    formHeart: HeartDiseasePredictionReducer,
    search: searchReducer,
});
const persistedReducers = persistReducer(persistConfig, reducers);
const STORE = createStore(persistedReducers, enhancer);
export default STORE;
export const PERSISTOR = persistStore(STORE);