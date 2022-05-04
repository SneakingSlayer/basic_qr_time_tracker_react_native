import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EmployeeDashboard } from "../../screens/employee/EmployeeDashboard";
import { MyTimeLogs } from "../../screens/employee/MyTimeLogs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text } from "react-native";
import { Header } from "../../components/header/Header";
const Tab = createBottomTabNavigator();
export const EmployeeRoute = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF6148",
      }}
    >
      <Tab.Screen
        name="QR Scan"
        component={EmployeeDashboard}
        options={{
          headerShown: true,
          headerStyle: { borderBottomWidth: 0.5, borderColor: "#ddd" },
          tabBarIconStyle: { width: "100%" },
          tabBarIcon: ({ color, size }) => (
            <View style={[{ display: "flex", flexDirection: "row" }]}>
              <Icon name="qrcode" size={20} color={color} />
              <Text
                style={[{ color: color, fontWeight: "bold", marginLeft: 5 }]}
              >
                My QR
              </Text>
            </View>
          ),
          headerTitle: () => <Header />,
          tabBarShowLabel: false,
          tabBarShowLabel: false,
          headerTitleStyle: {
            width: "100%",
            maxWidth: "100%",
            marginLeft: 0,
            marginRight: 0,
          },
          headerTitleContainerStyle: {
            width: "100%",
            maxWidth: "100%",
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 20,
            paddingRight: 20,
          },
        }}
      />
      <Tab.Screen
        name="MyTimeLogs"
        component={MyTimeLogs}
        options={{
          headerShown: true,
          headerStyle: { borderBottomWidth: 0.5, borderColor: "#ddd" },
          tabBarIconStyle: { width: "100%" },
          headerTitle: () => <Header />,
          tabBarIcon: ({ color, size }) => (
            <View style={[{ display: "flex", flexDirection: "row" }]}>
              <Icon name="envelope-open-text" size={20} color={color} />
              <Text
                style={[{ color: color, fontWeight: "bold", marginLeft: 5 }]}
              >
                My Logs
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
          tabBarShowLabel: false,
          headerTitleStyle: {
            width: "100%",
            maxWidth: "100%",
            marginLeft: 0,
            marginRight: 0,
          },
          headerTitleContainerStyle: {
            width: "100%",
            maxWidth: "100%",
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: 20,
            paddingRight: 20,
          },
        }}
      />
    </Tab.Navigator>
  );
};
