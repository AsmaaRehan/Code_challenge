import * as React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { newDetailsStyle } from '../styles/news_details_style';
import { ThemeContext } from '../themes/themes';
import { ThemeContsColors } from '../themes/colors'
import axiosHooksApi from '../services/axios_hook_api';
import { useTranslation } from "react-i18next";
import { homeScreenStyles } from '../styles/home_screen_style';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GetNewsDetails } from '../Redux/actions/news_action';
import Article from '../models/article_model';


interface Props {
    GetNewsDetails: (articleId: number, searchWord: string, lang: string) => void
    NewsDetails: Article
    ArticleDetails: Article

}
const NewsDetails = (props: Props) => {


    let { params }: any = useRoute();
    let { t, i18n } = useTranslation()
    let { theme } = React.useContext(ThemeContext);
    let [article, setArticle] = React.useState<Article>();
    let articleId = parseInt(params.articleId);

    React.useEffect(() => {
        if (!!params.articleId) {
            props.GetNewsDetails(articleId, '', i18n.language);
            setArticle(props?.ArticleDetails);
        } else {
            setArticle(params.article);
        }
    }, [])


    return (

        <View>
            {!!params.articleId && !article &&
                <View style={homeScreenStyles(ThemeContsColors[theme]).noDataView}>
                    <Text style={homeScreenStyles(ThemeContsColors[theme]).noDataTextView}>
                        {t("noDataFound") + " " + t("for")}: {articleId}
                    </Text>
                </View>
            }
            {!!article && <ScrollView contentContainerStyle={newDetailsStyle(ThemeContsColors[theme]).viewBackground}>
                <Text style={newDetailsStyle(ThemeContsColors[theme]).TitleStyle}>
                    {article?.title}
                </Text>
                <Image
                    style={newDetailsStyle(ThemeContsColors[theme]).imageStyle}
                    source={{ uri: article?.urlToImage }} />
                <Text style={newDetailsStyle(ThemeContsColors[theme]).authorTextStyle}>
                    Author: {article?.author}
                </Text>
                <Text style={newDetailsStyle(ThemeContsColors[theme]).contentTextStyle(18)}>
                    {article?.content}
                </Text>
                <Text style={newDetailsStyle(ThemeContsColors[theme]).contentTextStyle(18)}>
                    {article?.description}
                </Text>
                <Text style={
                    newDetailsStyle(ThemeContsColors[theme]).hyperLinkText}
                    onPress={() => Linking.openURL(article?.url)}>
                    {t("seeMoreDetails")}
                </Text>
                <Text style={newDetailsStyle(ThemeContsColors[theme]).contentTextStyle(12)}>
                    {t("publishedAt")} : {article?.publishedAt}
                </Text>
            </ScrollView >}
        </View>
    )
}

let mapStateToProps = ({ NewsDetails }: Props) => {

    return ({ ArticleDetails: NewsDetails });
}
export default connect(mapStateToProps, (dispatch) => {
    return bindActionCreators({ GetNewsDetails }, dispatch)
})(NewsDetails);