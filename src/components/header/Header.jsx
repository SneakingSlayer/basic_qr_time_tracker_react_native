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
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
export const Header = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          },
        ]}
      >
        <View
          style={[
            { display: "flex", flexDirection: "row", alignItems: "center" },
          ]}
        >
          <Icon name="business-time" size={20} color="#FF6148" />
          <Text style={[{ fontWeight: "bold", marginLeft: 5, fontSize: 18 }]}>
            Time Tracker
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Icon name="sign-out-alt" size={21} color="#8E8E8F" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "transparent",

    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  camera: {
    width: "100%",
    height: 400,
  },
});
