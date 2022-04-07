import * as React from 'react';
import {
    View, Text, Image, Pressable
} from 'react-native';
import routes from '../../Navigation/routes'
import { useNavigation } from '@react-navigation/native';
import { homeScreenStyles } from '../../styles/home_screen_style'
import { ThemeContsColors } from '../../themes/colors';
import { ThemeContext } from '../../themes/themes';

const NewsItem = ({ article }) => {
    let { navigate } = useNavigation();
    const { theme } = React.useContext(ThemeContext);
    return (
        <Pressable
            key={article?.author}
            style={homeScreenStyles(ThemeContsColors[theme]).viewHomeStyle}
            onPress={() => {
                navigate(routes.Details,
                    { article: article.title }
                );
            }}>
            <View
                style={homeScreenStyles(ThemeContsColors[theme]).viewHomeStyle}>
                <Text style={homeScreenStyles(ThemeContsColors[theme]).newsTitleHomeStyle}>
                    {article.title}
                </Text>
                <Image
                    style={homeScreenStyles(ThemeContsColors[theme]).newsImageHomeStyle}
                    source={{ uri: article.urlToImage }}
                />
            </View>
        </Pressable>)
}

export default NewsItem;    