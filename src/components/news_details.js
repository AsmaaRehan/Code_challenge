import * as React from 'react';
import { Text, View, Image, ScrollView, Linking } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { newDetailsStyle } from '../styles/news_details_style';
import { ThemeContext } from '../themes/themes';
import { ThemeContsColors } from '../themes/colors'
import { useTranslation } from "react-i18next";

const NewsDetails = () => {
    let { params } = useRoute();
    let article = params.article;
    let { theme } = React.useContext(ThemeContext);
    let [t, i18n] = useTranslation()
    console.log(article.urlToImage);
    return (
        <ScrollView contentContainerStyle={newDetailsStyle(ThemeContsColors[theme]).viewBackground}>
            <Text style={newDetailsStyle(ThemeContsColors[theme]).TitleStyle}>
                {article.title}
            </Text>
            <Image
                style={newDetailsStyle(ThemeContsColors[theme]).imageStyle}
                source={{ uri: article?.urlToImage }}
            />

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
                newDetailsStyle(ThemeContsColors[theme]).hyperLinkText
            }
                onPress={() => Linking.openURL(article.url)}>
                {t("seeMoreDetails")}
            </Text>

            <Text style={newDetailsStyle(ThemeContsColors[theme]).contentTextStyle(12)}>
                {t("publishedAt")} : {article.publishedAt}
            </Text>



        </ScrollView >




    )
}

export default NewsDetails;