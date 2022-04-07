import * as React from 'react';
import {
    View, Text, TextInput,
    ActivityIndicator, FlatList,
    Alert, RefreshControl
} from 'react-native';
import { ThemeContext } from "../../themes/themes"
import axiosHooksApi from "../../services/axios_hook_api"
import NewsItem from './news_item';
import { ThemeContsColors } from '../../themes/colors';
import { homeScreenStyles } from '../../styles/home_screen_style'
import { useTranslation } from "react-i18next";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const HomeScreen = () => {
    const { theme } = React.useContext(ThemeContext);
    const [searchTextInput, setSearchTextInput] = React.useState('');
    let { t, i18n } = useTranslation()
    let [{ data, loading, error }, refetch] = axiosHooksApi(searchTextInput, i18n.language);
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        refetch();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const renderItem = ({ item }) => {
        return (<NewsItem
            key={item.title}
            article={item}
        />)
    }

    return (<View style={homeScreenStyles(ThemeContsColors[theme]).backgroundView} >
        {error && Alert.alert(t("Error"), t("ErrorMsg"), [
            {
                text: t("retry")
                ,
                onPress: () => refetch(),
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
        {loading && <ActivityIndicator
            color={
                ThemeContsColors[theme].secondaryColor
            }>
        </ActivityIndicator>
        }
        {
            !loading && data?.totalResults == 0 &&
            <View style={homeScreenStyles(ThemeContsColors[theme]).noDataView}>
                <Text style={homeScreenStyles(ThemeContsColors[theme]).noDataTextView}>
                    {t("noDataFound")}
                </Text>
            </View>
        }
        {!loading && <FlatList
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh} />}
            data={data?.articles}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />

        }

    </View >)
}


export default HomeScreen;