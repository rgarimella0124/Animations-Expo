import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import EasingAnimation from "./src/Easing";

import Main from "./src/Main";

import InfiniteSpin from "./src/infiniteSpin";

import Stagger from "./src/Stagger";

import Spring from "./src/Spring";

import Sequence from "./src/sequence";

import Parallel from "./src/parallel";

const MainNav = createStackNavigator(
  {
    Easing: {
      screen: EasingAnimation
    },
    InfiniteSpin: {
      screen: InfiniteSpin
    },
    Stagger: {
      screen: Stagger
    },
    Sequence: {
      screen: Sequence
    },
    Parallel: {
      screen: Parallel
    },
    Spring: {
      screen: Spring
    },
    Main: {
      screen: Main
    }
  },
  {
    initialRouteName: "Main",
    mode: "modal"
  }
);

const MainContainer = createAppContainer(MainNav);

export default MainContainer;
