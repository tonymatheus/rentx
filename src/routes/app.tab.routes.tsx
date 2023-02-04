import React from "react";

import HomeSVG from "../assets/home.svg";
import CarSVG from "../assets/car.svg";
import PeopleSVG from "../assets/people.svg";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { AppStackRoutes } from "./app.stack.routes";
import { MyCars } from "../screens/MyCars";
import { useTheme } from "styled-components";
import { Platform } from "react-native";
const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
      initialRouteName='Home'
    >
      <Screen
        name='Home'
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeSVG width={size} height={size} fill={color} />
          ),
        }}
      />

      <Screen
        name='MyCars'
        component={MyCars}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CarSVG width={size} height={size} fill={color} />
          ),
        }}
      />
      <Screen
        name='Profile'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <PeopleSVG width={size} height={size} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
