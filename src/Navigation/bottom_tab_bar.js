
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../components/settings_screen';
import routes from './routes';
import HomeScreen from '../components/News_Home_Page/home_screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../themes/themes';
import { scale } from 'react-native-size-matters';
import { ThemeContsColors } from '../themes/colors';
const Tab = createBottomTabNavigator();
import { useTranslation } from "react-i18next";

const HomeBottomTabBarScreens = () => {
    const { theme } = React.useContext(ThemeContext);
    let [t, i18n] = useTranslation()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: ThemeContsColors[theme].secondaryColor,
                tabBarInactiveTintColor: ThemeContsColors[theme].secondaryColor,
                tabBarStyle: {
                    backgroundColor: ThemeContsColors[theme].backgroundColor,
                },
                tabBarLabelStyle: {
                    fontSize: scale(14),
                    fontWeight: 'bold',
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === routes.VOISNewsHome) {
                        iconName = focused
                            ? 'md-home'
                            : 'md-home-outline';
                    } else if (route.name === routes.Settings) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name={routes.VOISNewsHome} component={HomeScreen} />
            <Tab.Screen name={routes.Settings} component={SettingsScreen} />
        </Tab.Navigator>);
}
export default HomeBottomTabBarScreens;