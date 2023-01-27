import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { SchedulingComplete } from "../screens/SchedulingComplete";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Splash'
    >
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name='CarDetails' component={CarDetails} />
      <Stack.Screen name='Scheduling' component={Scheduling} />
      <Stack.Screen name='SchedulingDetails' component={SchedulingDetails} />
      <Stack.Screen name='SchedulingComplete' component={SchedulingComplete} />
      <Stack.Screen name='MyCars' component={MyCars} />
    </Stack.Navigator>
  );
}
