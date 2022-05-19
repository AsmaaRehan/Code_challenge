import {
    StyleSheet,
} from 'react-native';
import { scale } from 'react-native-size-matters';

export const homeScreenStyles = (theme: any) => StyleSheet.create({
    header: {
        backgroundColor: theme.backgroundColor,
    },
    backgroundView: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    },
    loadintTextViewStyle: {
        margin: scale(5),
        padding: scale(5),
        borderRadius: scale(20),
        textAlign: 'center',
        justifyContent: "center",
        backgroundColor: theme.primaryColor,
        color: theme.backgroundColor,
    },
    viewHomeStyle: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: scale(10),
        marginVertical: scale(5),
        padding: scale(5),
        borderRadius: scale(20),
        justifyContent: "space-evenly",
        backgroundColor: theme.primaryColor
    },
    searchTextInputStyle: {
        margin: scale(5),
        padding: scale(10),
        borderRadius: scale(5),
        backgroundColor: theme.primaryColor,
        color: theme.TextColor,
    },
    newsTitleHomeStyle: {
        fontSize: scale(18),
        width: "65%",
        color: theme.TextColor,
    },
    newsImageHomeStyle: {
        width: scale(100),
        height: scale(100),
        borderWidth: scale(3),
        borderColor: theme.backgroundColor,
    },
    noDataView: {
        margin: scale(15),
        padding: scale(5),
        borderRadius: scale(20),
        backgroundColor: theme.primaryColor
    },
    noDataTextView: {
        fontSize: scale(20),
        textAlign: 'center', color: theme.TextColor,
    }
});

