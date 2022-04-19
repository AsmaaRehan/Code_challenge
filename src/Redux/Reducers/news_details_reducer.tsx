import { NewsDetails } from "./action_type_const";

const NewsReducer = (state = null, action) => {
    if (action.type == NewsDetails) {
        return action.payload;
    }
    return state;

}

export default NewsReducer;