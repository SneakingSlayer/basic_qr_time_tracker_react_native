import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminDashboard from "../../screens/admin/AdminDashboard";
import { Employees } from "../../screens/admin/Employees";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text } from "react-native";
import { Header } from "../../components/header/Header";
const Tab = createBottomTabNavigator();
export const AdminRoute = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FF6148",
      }}
    >
      <Tab.Screen
        name="QR Scan"
        component={AdminDashboard}
        options={{
          headerShown: true,
          headerStyle: { borderBottomWidth: 0.5, borderColor: "#ddd" },
          tabBarIconStyle: { width: "100%", margin: 0 },

          tabBarIcon: ({ color, size }) => (
            <View style={[{ display: "flex", flexDirection: "row" }]}>
              <Icon name="qrcode" size={20} color={color} />
              <Text
                style={[{ color: color, fontWeight: "bold", marginLeft: 5 }]}
              >
                Scan
              </Text>
            </View>
          ),
          headerTitle: () => <Header />,
          headerTitleStyle: {
            width: "100%",
            maxWidth: "100%",
            marginLeft: 0,
            marginRight: 0,
          },
          tabBarShowLabel: false,
          tabBarShowLabel: false,
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
        name="Employees"
        component={Employees}
        options={{
          headerShown: true,
          headerStyle: { borderBottomWidth: 0.5, borderColor: "#ddd" },
          tabBarIconStyle: { width: "100%", marginLeft: 0, marginRight: 0 },
          headerTitle: () => <Header />,
          headerTitleStyle: { width: "100%", margin: 0 },
          tabBarIcon: ({ color, size }) => (
            <View style={[{ display: "flex", flexDirection: "row" }]}>
              <Icon name="users" size={20} color={color} />
              <Text
                style={[{ color: color, fontWeight: "bold", marginLeft: 5 }]}
              >
                Employees
              </Text>
            </View>
          ),
          tabBarShowLabel: false,
          tabBarShowLabel: false,
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
