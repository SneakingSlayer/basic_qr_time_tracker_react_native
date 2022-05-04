import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome";
import { globalStyles } from "../../globals/globalStyles";

export default function Register({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scan, setScan] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[globalStyles.wrapper]}>
        <View>
          <Text
            style={[
              { textAlign: "center", marginBottom: 5 },
              globalStyles.heading,
            ]}
          >
            Scan QR Code
          </Text>
          <View
            style={[
              {
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              },
            ]}
          >
            <Text
              style={[
                { textAlign: "center", maxWidth: 300 },
                globalStyles.textMuted,
              ]}
            >
              Scan QR Code to Log In or Log Out. Please allow camera access to
              continue.
            </Text>
          </View>
        </View>
        <View
          style={[
            {
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 20,
              marginTop: 20,
            },
          ]}
        >
          {!scan ? (
            <Icon
              style={[{ textAlign: "center" }]}
              name="qrcode"
              size={300}
              color="#000"
            />
          ) : (
            <Camera style={styles.camera} type={type}>
              <View
                style={[
                  {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 10,
                  },
                ]}
              >
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Icon size={21} name="rotate-right" color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setScan(false)}
                >
                  <Icon size={21} name="times" color="#fff" />
                </TouchableOpacity>
              </View>
            </Camera>
          )}
        </View>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => setScan(true)}
        >
          <Text
            style={[
              {
                color: "#fff",
                textAlign: "center",
              },
            ]}
          >
            Scan QR Code
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
  camera: {
    width: "100%",
    height: 400,
  },
});
