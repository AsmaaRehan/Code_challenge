import useAxios from 'axios-hooks'
import { newsUrl } from './api_key'
function axiosHooksApi(searchWord, lang) {


    return useAxios({
        url: newsUrl,
        params: {
            q: `${searchWord}`,
            language: `${lang}`
        }

    });
}

export default axiosHooksApi;