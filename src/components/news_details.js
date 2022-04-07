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
    // let article = {
    //     source: {
    //         "id": "fox-news",
    //         "name": "Fox News"
    //     },
    //     author: "Ryan Gaydos",
    //     title: "Jack Nicklaus reacts to Tiger Woods' Masters plan: 'If his body holds up, could he do it again?' - Fox News",
    //     description: "Tiger Woods hasn’t competed in a high-level golf event since the 2020 Masters.",
    //     url: "https://www.foxnews.com/sports/jack-nicklaus-reacts-tiger-woods-masters",
    //     urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2022/04/Jack-Nicklaus-Tiger-Woods.jpg",
    //     publishedAt: "2022-04-06T12:00:10Z",
    //     content: "Tiger Woods intends to play at the Masters this week, more than a year after suffering devastating leg injuries in a car crash in Los Angeles.\r\nWoods made his intentions known Tuesday during a press … [+2360 chars]"
    // };
    let { theme } = React.useContext(ThemeContext);
    let [t, i18n] = useTranslation()
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