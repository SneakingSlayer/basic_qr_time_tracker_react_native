import { StatusBar } from "expo-status-bar";
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
export default function Register({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.wrapper}>
        <View
          style={[
            {
              marginBottom: 10,
              textAlign: "center",
            },
          ]}
        >
          <Text
            style={[
              {
                textAlign: "center",
              },
              globalStyles.heading,
            ]}
          >
            <Icon name="business-time" size={30} color="#FF6148" /> Sign Up
          </Text>
          <Text
            style={[
              {
                textAlign: "center",
              },
            ]}
          >
            Fill up the form to register.
          </Text>
        </View>
        <View>
          <View style={[{ display: "flex", flexDirection: "row" }]}>
            <TextInput
              style={[{ marginRight: 3 }, globalStyles.formInputHalf]}
              placeholder="First Name"
            />
            <TextInput
              style={[{ marginLeft: 3 }, globalStyles.formInputHalf]}
              placeholder="Last Name"
            />
          </View>
          <TextInput style={globalStyles.formInput} placeholder="Username" />
          <TextInput style={globalStyles.formInput} placeholder="Email" />
          <TextInput
            style={globalStyles.formInput}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View
          style={[
            {
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              marginBottom: 20,
              marginTop: 10,
            },
          ]}
        >
          <Text style={[globalStyles.small]}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text
              style={[
                {
                  color: "#FF6148",
                },
                globalStyles.small,
              ]}
            >
              Sign In Here
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={globalStyles.button}>
          <Text
            style={[
              {
                color: "#fff",
                textAlign: "center",
              },
            ]}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
