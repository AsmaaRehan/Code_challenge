
import { combineReducers } from "redux";
import NewsReducer from "./news_reducer";

const RootReducer = combineReducers({

    NewsData: NewsReducer
})

export default RootReducer;