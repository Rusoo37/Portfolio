import AboutMe from "../components/pages/aboutMe/AboutMe";
import HomeContainer from "../components/pages/home/HomeContainer";
import WorkContainer from "../components/pages/work/WorkContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: HomeContainer,
    },
    {
        id: "work",
        path: "/work",
        Element: WorkContainer,
    },
    {
        id: "aboutMe",
        path: "/about-me",
        Element: AboutMe,
    },
];
