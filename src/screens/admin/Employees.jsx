import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { globalStyles } from "../../globals/globalStyles";
import { employees } from "../../utils/api";
export const Employees = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={globalStyles.wrapper}>
        <Text
          style={[{ marginBottom: 15, marginTop: 15 }, globalStyles.heading]}
        >
          Employees
        </Text>
        <View>
          {employees.map((emp, key) => (
            <View
              key={key}
              style={[
                {
                  marginBottom: 10,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              <View
                style={[
                  {
                    display: "flex",
                    flexDirection: "row",
                    alignItem: "center",
                  },
                ]}
              >
                <View
                  style={[
                    {
                      height: 40,
                      width: 40,
                      marginRight: 10,
                    },
                  ]}
                >
                  <View
                    style={[
                      {
                        backgroundColor: "#ffe4e0",
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                    ]}
                  >
                    <Text
                      style={[
                        {
                          color: "#FF6148",
                          fontWeight: "bold",

                          textAlign: "center",
                          fontSize: 18,
                        },
                      ]}
                    >
                      {emp.name.substring(0, 1)}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={[{ fontSize: 16, fontWeight: "bold" }]}>
                    {emp.name}
                  </Text>
                  <Text style={[{}, globalStyles.textMuted]}>{emp.title}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("logs", { name: emp.name })}
              >
                <Text style={[{ color: "#FF6148", fontSize: 12 }]}>
                  View Logs
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
  camera: {
    width: "100%",
    height: 400,
  },
});
