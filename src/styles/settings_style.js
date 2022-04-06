import {
    StyleSheet
} from 'react-native';
import { scale } from 'react-native-size-matters';

export const settingsStyle = (theme) => StyleSheet.create({

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
        margin: scale(20),
        padding: scale(50),
        borderRadius: scale(15),
        margin: scale(10),
        padding: (10),
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
