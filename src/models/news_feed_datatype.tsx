import Article from "./article_model";

interface NewsDataType {
    data: {
        status: string
        totalResults: number
        articles: Article[]
    }
    loading: boolean,
    error: string;
}



export default NewsDataType;