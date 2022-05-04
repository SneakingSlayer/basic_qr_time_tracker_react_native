import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";

import { Routes } from "./src/routes/Routes";

export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({});
