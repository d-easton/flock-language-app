import {NavigationActions} from "react-native";
import * as scenes from "../scene-names";

export const navigateToLogin = () => NavigationAction.navigate({routeName: scenes.LOGIN});
export const navigateToSplash = () => NavigationAction.navigate({routeName: scenes.SPLASH});