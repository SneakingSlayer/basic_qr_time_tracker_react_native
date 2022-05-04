import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { users } from "../../utils/api";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleLogin = () => {
    setError(false);
    if (email === "" || password === "") return;
    const filtered = users.filter(
      (user) => user.email === email && user.password === password
    );
    if (!filtered.length) {
      setError(true);
      return;
    }
    navigation.navigate(filtered[0].role);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.wrapper}>
        <View
          style={[
            {
              marginBottom: 20,
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
            <Icon name="business-time" size={30} color="#FF6148" /> Sign In
          </Text>
          <Text
            style={[
              {
                color: "#000",
                textAlign: "center",
              },
            ]}
          >
            It's nice to see you again.
          </Text>
          {error ? (
            <Text
              style={[
                {
                  color: "#FF6148",
                  textAlign: "center",
                  marginTop: 10,
                },
              ]}
            >
              Incorrect Email or Password.
            </Text>
          ) : null}
        </View>
        <View>
          <TextInput
            style={globalStyles.formInput}
            placeholder="Email"
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            style={globalStyles.formInput}
            placeholder="Password"
            onChangeText={(e) => setPassword(e)}
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
          <Text style={[globalStyles.small]}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("register")}>
            <Text
              style={[
                {
                  color: "#FF6148",
                },
                globalStyles.small,
              ]}
            >
              Sign Up Here
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text
            style={[
              {
                color: "#fff",
                textAlign: "center",
              },
            ]}
          >
            Sign In
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
