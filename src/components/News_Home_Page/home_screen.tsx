import * as React from 'react';
import {
    View, Text, TextInput, FlatList, RefreshControl, Alert,
    ActivityIndicator
} from 'react-native';
import { ThemeContext } from "../../themes/themes"
import { ThemeContsColors } from '../../themes/colors';
import { homeScreenStyles } from '../../styles/home_screen_style'
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GetAllNewsData } from '../../Redux/actions/news_action';
import NewsItem from './news_item';
import NewsDataType from '../../models/news_feed_datatype';
import Article from '../../models/article_model';


interface Props {
    GetAllNewsData: (searchWord: string, lang: string) => void
    item: Article
    NewsFeed: NewsDataType
    NewsData: NewsDataType;


}

const wait = (timeout?: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const HomeScreen = (props: Props) => {
    // const { theme } = React.useContext<{ theme: string, toggleTheme: () => void }>(ThemeContext);
    const { theme } = React.useContext(ThemeContext);
    const [searchTextInput, setSearchTextInput] = React.useState('');
    let { t, i18n } = useTranslation();
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        props.GetAllNewsData(searchTextInput, i18n.language);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    React.useEffect(() => {
        console.log(props);
        props.GetAllNewsData(searchTextInput, i18n.language);
    }, [searchTextInput, i18n.language]);

    const renderItem = ({ item }: any) => {
        return (<NewsItem
            key={item.title}
            article={item}
        />)
    }
    return (
        <View style={homeScreenStyles(ThemeContsColors[theme]).backgroundView} >
            {props.NewsFeed?.error && Alert.alert(t("Error"), t("ErrorMsg"), [
                {
                    text: t("retry")
                    ,
                    onPress: () => props.GetAllNewsData(searchTextInput, i18n.language),
                },
                {
                    text: t("cancel"),
                    style: 'cancel'
                }
            ])}
            < View >
                <TextInput
                    style={homeScreenStyles(ThemeContsColors[theme]).searchTextInputStyle}
                    onChangeText={(val) => setSearchTextInput(val)}
                    value={searchTextInput}
                    placeholder={t("Search")}
                    placeholderTextColor={ThemeContsColors[theme].TextColor}
                />
            </View >
            {!props.NewsFeed?.data && <ActivityIndicator
                color={ThemeContsColors[theme].secondaryColor}>
            </ActivityIndicator>}
            {!props.NewsFeed?.loading && props.NewsFeed?.data?.totalResults == 0 &&
                <View style={homeScreenStyles(ThemeContsColors[theme]).noDataView}>
                    <Text style={homeScreenStyles(ThemeContsColors[theme]).noDataTextView}>
                        {t("noDataFound")}
                    </Text>
                </View>
            }
            {!!props.NewsFeed?.data && <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh} />}
                data={props.NewsFeed?.data?.articles}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />}
        </View >)
}


let mapStateToProps = ({ NewsData }: Props) => {
    return { NewsFeed: NewsData }
}
export default connect(mapStateToProps, (dispatch) => {
    return bindActionCreators({ GetAllNewsData }, dispatch);

})(HomeScreen);