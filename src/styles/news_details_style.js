import {
    StyleSheet,
} from 'react-native';
import { scale } from 'react-native-size-matters';

export const newDetailsStyle = (theme) => StyleSheet.create({

    viewBackground: {
        backgroundColor: theme.backgroundColor,
    },
    TitleStyle: {
        alignItems: 'center',
        fontSize: scale(22),
        margin: scale(5),
        textAlign: 'center',
        color: theme.TextColor,
        fontWeight: 'bold',
    },
    imageStyle: {
        width: '90%',
        height: scale(250),
        margin: scale(10),
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: scale(5),
        borderColor: theme.primaryColor,
    },
    authorTextStyle: {
        alignSelf: "flex-end",
        marginEnd: scale(15),
        marginTop: scale(5),
        fontSize: scale(12),
        color: theme.TextColor,
    },
    contentTextStyle: (size) => ({
        alignSelf: "flex-start",
        fontSize: scale(size),
        margin: scale(5),
        color: theme.TextColor,

    }),

    hyperLinkText: {
        margin: scale(10),
        fontSize: scale(16),
        textDecorationLine: 'underline',
        color: 'blue'
    }
});
