import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { height, marginWidth, width } from "../../config/globalStyles";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RecipeData } from "../../config/RecipeData";
import { Feather } from "@expo/vector-icons";

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
};

export default SearchScreen;
