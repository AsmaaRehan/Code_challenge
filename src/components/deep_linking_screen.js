
import * as React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import { settingsStyle } from '../styles/settings_style'
import { ThemeContext } from '../themes/themes';
import { ThemeContsColors } from '../themes/colors'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const LinkingScreen = () => {
    const { theme } = React.useContext(ThemeContext);

    const url_home = 'code_challenge://NewsLetter/News'
    const url_details = 'code_challenge://NewsLetter/details'
    const url_dettings = 'code_challenge://NewsLetter/settings'
    return (
        <View style={settingsStyle(ThemeContsColors[theme]).viewBackground}>
            <Text> Linking Screen</Text>
            <Pressable
                style={({ pressed }) =>
                    StyleSheet.flatten([settingsStyle(ThemeContsColors[theme]).langBtnStyle, pressed && settingsStyle(ThemeContsColors[theme]).pressStyle])
                }
                onPress={() => {
                    console.log(url_home)
                    Linking.openURL(url_home)
                }}>
                <Text style={settingsStyle(ThemeContsColors[theme]).langBtnTextStyle}>
                    Home Screen
                </Text>
            </Pressable>
            <Pressable
                style={({ pressed }) =>
                    StyleSheet.flatten([settingsStyle(ThemeContsColors[theme]).langBtnStyle, pressed && settingsStyle(ThemeContsColors[theme]).pressStyle])
                }
                onPress={() => Linking.openURL(url_details)}>

                <Text style={settingsStyle(ThemeContsColors[theme]).langBtnTextStyle}>
                    Details
                </Text>
            </Pressable>
            <Pressable
                style={({ pressed }) =>
                    StyleSheet.flatten([settingsStyle(ThemeContsColors[theme]).langBtnStyle, pressed && settingsStyle(ThemeContsColors[theme]).pressStyle])
                }
                onPress={() => Linking.openURL(url_dettings)}>

                <Text style={settingsStyle(ThemeContsColors[theme]).langBtnTextStyle}>
                    Settings
                </Text>
            </Pressable>
        </View>)
}

export default LinkingScreen;