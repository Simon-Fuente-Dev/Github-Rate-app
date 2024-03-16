import React from "react";
import Constants from "expo-constants";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Link, useLocation } from "react-router-native";
import StyledText from "./StyledText";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.secondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.primaryText,
  },
});

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();

  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

export default AppBarTab;
