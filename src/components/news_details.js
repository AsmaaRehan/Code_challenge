import * as React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { newDetailsStyle } from '../styles/news_details_style';
import { ThemeContext } from '../themes/themes';
import { ThemeContsColors } from '../themes/colors'
import axiosHooksApi from '../services/axios_hook_api';
import { useTranslation } from "react-i18next";
import { homeScreenStyles } from '../styles/home_screen_style';


const NewsDetails = () => {

    let { params } = useRoute();
    let { t, i18n } = useTranslation()
    let { theme } = React.useContext(ThemeContext);
    let article;
    let articleId = parseInt(params.articleId);
    let [{ data, loading, error }, refetch] = [{ data, loading, error }, refetch] = axiosHooksApi('', i18n.language);

    if (!!params.articleId && data?.totalResults > articleId) {
        article = data?.articles[articleId]
    } else if (!!params.articleId && data?.totalResults < articleId) {
        article = {}
    } else {
        article = params.article;
    }

    return (

        <View>
            {!!params.articleId && !loading && (data?.totalResults == 0 || data?.totalResults < articleId) &&
                <View style={homeScreenStyles(ThemeContsColors[theme]).noDataView}>
                    <Text style={homeScreenStyles(ThemeContsColors[theme]).noDataTextView}>
                        {t("noDataFound") + " " + t("for")}: {articleId}
                    </Text>
                </View>
            }
            {!params.articleId && <ScrollView contentContainerStyle={newDetailsStyle(ThemeContsColors[theme]).viewBackground}>
                <Text style={newDetailsStyle(ThemeContsColors[theme]).TitleStyle}>
                    {article.title}
                </Text>
                <Image
                    style={newDetailsStyle(ThemeContsColors[theme]).imageStyle}
                    source={{ uri: article?.urlToImage }} />
                <Text style={newDetailsStyle(ThemeContsColors[theme]).authorTextStyle}>
                    Author: {article.author}
                </Text>
                <Text style={newDetailsStyle(ThemeContsColors[theme]).contentTextStyle(18)}>
                    {article.content}
                </Text>
                <Text style={newDetailsStyle(ThemeContsColors[theme]).contentTextStyle(18)}>
                    {article.description}
                </Text>
                <Text style={
                    newDetailsStyle(ThemeContsColors[theme]).hyperLinkText}
                    onPress={() => Linking.openURL(article.url)}>
                    {t("seeMoreDetails")}
                </Text>
                <Text style={newDetailsStyle(ThemeContsColors[theme]).contentTextStyle(12)}>
                    {t("publishedAt")} : {article.publishedAt}
                </Text>
            </ScrollView >}
        </View>
    )
}

export default NewsDetails;