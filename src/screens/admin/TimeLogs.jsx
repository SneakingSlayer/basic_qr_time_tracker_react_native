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
import { logs } from "../../utils/api";
export const TimeLogs = ({ route }) => {
  const { name } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={[{}, globalStyles.wrapper]}>
        {logs.map((log, key) => (
          <View key={key} style={[{ marginBottom: 15 }]}>
            <Text
              style={[
                {
                  marginBottom: 10,
                  marginTop: 10,
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: 18,
                },
              ]}
            >
              {log.date}
            </Text>
            <View
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
                      {name.substring(0, 1)}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={[{ fontSize: 16, fontWeight: "bold" }]}>
                    {name}{" "}
                    <Text style={[{ fontSize: 16, fontWeight: "normal" }]}>
                      has logged out.
                    </Text>
                  </Text>
                  <Text style={[{}, globalStyles.textMuted]}>{log.logOut}</Text>
                </View>
              </View>
            </View>
            <View
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
                        backgroundColor: "#FF6148",
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
                          color: "#fff",
                          fontWeight: "bold",

                          textAlign: "center",
                          fontSize: 18,
                        },
                      ]}
                    >
                      {name.substring(0, 1)}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={[{ fontSize: 16, fontWeight: "bold" }]}>
                    {name}{" "}
                    <Text style={[{ fontSize: 16, fontWeight: "normal" }]}>
                      has logged in.
                    </Text>
                  </Text>
                  <Text style={[{}, globalStyles.textMuted]}>{log.logIn}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
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
