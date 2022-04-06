// import { useTranslation } from "react-i18next";

const routes = (lang) => Object.freeze({
    News: lang("News"),
    NewsDetails: `${lang("News")} ${lang("details")}`,
    Settings: lang("Settings"),
    HomeBottomTabBarScreens: lang('welcoming'),
    Linking: "Linking"
});

export default routes;