import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../../globals/globalStyles";
import Icon from "react-native-vector-icons/AntDesign";
import FaIcon from "react-native-vector-icons/FontAwesome5";
export const EmployeeDashboard = () => {
  const name = "Jaye";
  return (
    <SafeAreaView style={styles.container}>
      <View style={[globalStyles.wrapper]}>
        <View
          style={[
            styles.card,
            { alignItems: "center", justifyContent: "center" },
          ]}
        >
          <View
            style={[
              {
                display: "flex",
                flexDirection: "row",
                alignItem: "center",
                marginBottom: 10,
              },
            ]}
          >
            <View
              style={[
                {
                  height: 80,
                  width: 80,
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
                      fontSize: 42,
                    },
                  ]}
                >
                  {name.substring(0, 1)}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={[{ textAlign: "center" }, globalStyles.heading]}>
              Jaye Pawaon
            </Text>
            <Text style={[{ textAlign: "center" }, globalStyles.textMuted]}>
              Customer Representative
            </Text>
          </View>

          <View
            style={[
              {
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 5,
                marginTop: 20,
              },
            ]}
          >
            <FaIcon name="check-circle" size={21} color="#FF6148" />
            <Text
              style={[{ fontWeight: "bold", marginLeft: 4, color: "#FF6148" }]}
            >
              Logged In
            </Text>
          </View>

          <Icon name="qrcode" size={300} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
  },
});
