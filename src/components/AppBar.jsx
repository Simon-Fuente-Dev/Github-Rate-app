import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import theme from "../theme.js";
import AppBarTab from "./AppBarTab.jsx";

const styles = StyleSheet.create({
  AppBar: {
    backgroundColor: theme.appBar.primary,
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  scroll: {
    paddingBottom: 10,
    flexDirection:"row"
  },
  text: {
    color: theme.appBar.secondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.primaryText,
  },
});

const AppBar = () => {
  
  return (
    <View style={styles.AppBar}>
      <View  style={styles.scroll}>
        <AppBarTab  to="/">
          Repositories
        </AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
        
      </View>
    </View>
  );
};

export default AppBar;
