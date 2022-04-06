
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../themes/themes';
import NewsDetails from '../components/news_details';
import routes from './routes';
import HomeBottomTabBarScreens from './bottom_tab_bar'
import { ThemeContsColors } from '../themes/colors';
import { useTranslation } from "react-i18next";
import LinkingScreen from '../components/deep_linking_screen';

const Stack = createNativeStackNavigator();
const NavigationScreens = () => {
    const { theme } = React.useContext(ThemeContext);
    let [t, i18n] = useTranslation()



    return (
        <NavigationContainer
        // linking={{
        //     prefixes: ['code_challenge://NewsLetter'],
        //     config
        // }}
        >
            <Stack.Navigator
                initialRouteName={routes(t).HomeBottomTabBarScreens}
                screenOptions={{
                    headerTintColor: ThemeContsColors[theme].TextColor,
                    headerStyle: {
                        backgroundColor: ThemeContsColors[theme].backgroundColor,
                    }
                }}>
                <Stack.Screen name={routes(t).HomeBottomTabBarScreens}
                    component={HomeBottomTabBarScreens}
                />
                <Stack.Screen name={routes(t).NewsDetails}
                    component={NewsDetails}
                />
                <Stack.Screen name={routes(t).Linking}
                    component={LinkingScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
};



export default NavigationScreens;
