import {
    StyleSheet
} from 'react-native';
import { scale } from 'react-native-size-matters';

export const settingsStyle = (theme: any) => StyleSheet.create({

    viewBackground: {
        backgroundColor: theme.backgroundColor,
        flex: 1
    },
    textStyle: {
        fontSize: scale(16),
        margin: scale(5),
        color: theme.TextColor,
        fontWeight: 'bold',
    },
    rowViewStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: theme.primaryColor,
        padding: scale(5),
    },
    langBtnStyle: {
        margin: scale(10),
        padding: scale(10),
        borderRadius: scale(15),
        backgroundColor: theme.primaryColor

    },
    pressStyle: {
        opacity: .5,
    },
    langBtnTextStyle: {
        fontSize: scale(20),
        color: theme.TextColor,
        fontWeight: "bold",
        textAlign: 'center'
    },
});
