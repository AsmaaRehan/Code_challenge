import * as React from 'react';
import {
    View, Text, Image, Pressable
} from 'react-native';
import routes from '../../Navigation/routes'
import { useNavigation } from '@react-navigation/native';
import { homeScreenStyles } from '../../styles/home_screen_style'
import { ThemeContsColors } from '../../themes/colors';

const NewsItem = ({ article, theme, t }) => {
    let { navigate } = useNavigation();

    return (<Pressable
        key={article?.author}
        style={homeScreenStyles(ThemeContsColors[theme]).viewHomeStyle}
        onPress={() => {
            navigate(routes(t).NewsDetails,
                { article: article }
            );
        }}>
        <View
            style={homeScreenStyles(ThemeContsColors[theme]).viewHomeStyle}
        >

            <Text style={homeScreenStyles(ThemeContsColors[theme]).newsTitleHomeStyle}>
                {article.title}
            </Text>
            <Image
                style={homeScreenStyles(ThemeContsColors[theme]).newsImageHomeStyle}
                source={{ uri: article.urlToImage }}
            />
        </View>
    </Pressable>
    )
}

export default NewsItem;    