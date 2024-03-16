import React from "react";
import { View, Text, FlatList } from "react-native";
import repositories from "../data/repositories.js";
import Repository from "./Repository.jsx";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => (
        <Repository {...repo} />
      )}
    ></FlatList>
  );
};

export default RepositoryList;
