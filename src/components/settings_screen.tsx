import * as React from 'react'
import { View, Text, Switch, StyleSheet, Pressable } from 'react-native'
import { ThemeContext } from '../themes/themes';
import { ThemeContsColors } from '../themes/colors'
import { settingsStyle } from '../styles/settings_style'
import { useTranslation } from "react-i18next";

const SettingsScreen = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        toggleTheme()
    };
    let { t, i18n } = useTranslation()

    return (
        <View style={settingsStyle(ThemeContsColors[theme]).viewBackground}>
            <View style={settingsStyle(ThemeContsColors[theme]).rowViewStyle}>
                <Text style={settingsStyle(ThemeContsColors[theme]).textStyle}>
                    {t("Change")} {t(`${theme}`)} {t("Theme")}:
                </Text>
                <Switch
                    trackColor={{ false: ThemeContsColors[theme].secondaryColor, true: ThemeContsColors[theme].secondaryColor }}
                    thumbColor={isEnabled ? ThemeContsColors[theme].primaryColor : ThemeContsColors[theme].primaryColor}
                    ios_backgroundColor={ThemeContsColors[theme].primaryColor}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <Pressable
                style={({ pressed }) =>
                    StyleSheet.flatten([settingsStyle(ThemeContsColors[theme]).langBtnStyle, pressed && settingsStyle(ThemeContsColors[theme]).pressStyle])
                }
                onPress={() => {
                    i18n.changeLanguage("en");
                }}>
                <Text style={settingsStyle(ThemeContsColors[theme]).langBtnTextStyle}>
                    English Language
                </Text>
            </Pressable>
            <Pressable
                style={({ pressed }) =>
                    StyleSheet.flatten([settingsStyle(ThemeContsColors[theme]).langBtnStyle, pressed && settingsStyle(ThemeContsColors[theme]).pressStyle])
                }
                onPress={() => {
                    i18n.changeLanguage("de");
                }}>
                <Text style={settingsStyle(ThemeContsColors[theme]).langBtnTextStyle}>
                    Deutsch Sprache
                </Text>

            </Pressable>

        </View>
    );

}

export default SettingsScreen