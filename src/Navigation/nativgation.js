
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../themes/themes';
import NewsDetails from '../components/news_details';
import routes from './routes';
import HomeBottomTabBarScreens from './bottom_tab_bar'
import { ThemeContsColors } from '../themes/colors';
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator();
const NavigationScreens = () => {
    const { theme } = React.useContext(ThemeContext);
    let [t, i18n] = useTranslation()
    const linking = {
        prefixes: ['code_challenge://'],
        config: {
            initialRouteName: 'VOISNews',
            screens: {
                VOISNews: {
                    path: "VOISNews"
                },
                Details: {
                    path: 'details/:articleId'
                }, Settings: {
                    path: 'Settings'
                }
            }
        }
    };
    return (
        <NavigationContainer
            linking={linking}

        >
            <Stack.Navigator
                initialRouteName={routes.VOISNews}
                screenOptions={{
                    headerTintColor: ThemeContsColors[theme].TextColor,
                    headerStyle: {
                        backgroundColor: ThemeContsColors[theme].backgroundColor,
                    }
                }}>
                <Stack.Screen name={routes.VOISNews}
                    component={HomeBottomTabBarScreens}
                />
                <Stack.Screen name={routes.Details}
                    component={NewsDetails} />

            </Stack.Navigator>
        </NavigationContainer>

    );
};



export default NavigationScreens;
