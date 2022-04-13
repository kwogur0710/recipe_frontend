import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

type SearchBarComponentProps = {};

const RecipeIngredients: React.FunctionComponent<SearchBarComponentProps> = () => {
const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};

return (
  <View style={styles.view}>
    <SearchBar
      placeholder="재료를 입력하세요"
      onChangeText={updateSearch}
      value={search}
      theme={'white'}
    />
  </View>
);
};

const styles = StyleSheet.create({
view: {
  margin: 10,
},
});

export default RecipeIngredients;