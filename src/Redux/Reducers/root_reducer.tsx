
import { combineReducers } from "redux";
import NewsReducer from "./news_reducer";
import NewsDetailsReducer from './news_details_reducer';

const RootReducer = combineReducers({

    NewsData: NewsReducer,
    NewsDetails: NewsDetailsReducer,
});

export default RootReducer;