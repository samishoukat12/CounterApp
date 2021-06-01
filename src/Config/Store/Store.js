import { applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../Redux/Reducers/rootReducers"
const Store = createStore(rootReducer,applyMiddleware(thunk));
export default Store;