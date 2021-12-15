import React from "react";
import colors from "../misc/colors";
import { View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ containerStyle, value, onClear, onChangeText }) => {
  return (
    <View style={[styles.container, { ...containerStyle }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBar}
        placeholder="Search here.."
      />
      {value ? (
        <AntDesign
          name="close"
          size={20}
          color={colors.PRIMARY}
          onPress={onClear}
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 0.5,
    borderColor: colors.PRIMARY,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  clearIcon: {
    position: "absolute",
    right: 10,
  },
  container: {
    justifyContent: "center",
  },
});
export default SearchBar;
