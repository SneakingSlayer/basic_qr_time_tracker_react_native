import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//Pages
import Login from "../screens/public/Login";
import { EmployeeDashboard } from "../screens/employee/EmployeeDashboard";
import Register from "../screens/public/Register";
import { TimeLogs } from "../screens/admin/TimeLogs";
import { AdminRoute } from "./admin/AdminRoute";
import { EmployeeRoute } from "./employee/EmployeeRoute";
const Stack = createStackNavigator();

export const Routes = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="admin"
          component={AdminRoute}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="employee"
          component={EmployeeRoute}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="logs"
          component={TimeLogs}
          options={{ title: "Time Logs" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
