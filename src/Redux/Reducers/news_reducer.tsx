import { News } from "./action_type_const";

const NewsReducer = (state = null, action: any) => {
    if (action.type == News) {
        return action.payload;
    }
    return state;

}

export default NewsReducer;