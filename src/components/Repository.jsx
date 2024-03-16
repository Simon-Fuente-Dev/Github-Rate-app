import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold">
          {fullName}
        </StyledText>
        <StyledText color='secondary'>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  );
};

const Repository = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    //Evaluar por plataforma
    backgroundColor: Platform.select({
      android: 'green',
      ios: theme.colors.primary
    }),
    alignSelf: "flex-start",
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: 4
  },
  image: {
    width: 48,
    height: 48,
    margin: "auto",
    borderRadius: 4,
  },
});

export default Repository;
