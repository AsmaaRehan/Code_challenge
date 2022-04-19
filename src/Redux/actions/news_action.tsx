import { newsUrl } from "../../services/api_key";
import axiosHooksApi from "../../services/axios_hook_api";
import { News, NewsDetails } from "../Reducers/action_type_const"

export const GetAllNewsData = async (searchWord: string, lang: string) => {
    var news, error, loading;

    try {
        loading = true;
        await fetch(`${newsUrl}&q=${searchWord}&language=${lang}`,
        ).then((res) => { return res.json(); }).then((data) => {
            news = data;

        }).catch((e) => {
            error = e;
        }).finally(() => {
            loading = false;
        })
    } catch (error) {
        error = error;
    }

    return {
        type: News,
        payload: {
            data: news,
            error: error,
            loading: loading


        }
    }
}

export const GetNewsDetails = async (articleId: number, searchWord: string, lang: string) => {
    var newsDetails = {}, error, loading;
    try {
        loading = true;
        await fetch(`${newsUrl}&q=${searchWord}&language=${lang}`,
        ).then((res) => { return res.json(); }).then((data) => {
            if (data.totalResults > articleId) {
                newsDetails = data.articles[articleId];

            }
        }).catch((e) => {
            error = e;
        }).finally(() => {
            loading = false;
        });
    } catch (error) {
        error = error;
    }
    return {
        type: NewsDetails,
        payload: newsDetails,

    }

}
