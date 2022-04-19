import NewsItem from "../news_item";

describe(("News Item"), () => {
    test("News Item Component ", () => {
        const tree = render(
            <NewsItem article={{
                author: "Author",
                urlToImage: "Umage",

            }} />
        );
        expect(tree).toMatchSnapshot();
    })
})