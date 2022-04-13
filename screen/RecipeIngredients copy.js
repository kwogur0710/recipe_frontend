import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  Colors,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const items = [
  {
    name: '재료',
    id: 0,
    ingredients: [
      {
        name: '간장',
        id: 1-1,
      },
      {
        name: '소금',
        id: 1-2,
      },
      {
        name: '설탕',
        id: 1-3,
      },
      {
        name: '양파',
        id: 1-4,
      },
      {
        name: '대파',
        id: 1-5,
      },
      {
        name: '마늘',
        id: 1-6,
      },
      {
        name: '된장',
        id: 1-7,
      },
      {
        name: '고추장',
        id: 1-8,
      },
      {
        name: '돼지고기',
        id: 1-9,
      },
      {
        name: '굴소스',
        id: 1-10,
      },
      {
        name: '식초',
        id: 1-11,
      },
      {
        name: '계란',
        id: 1-12,
      },
      {
        name: '감자',
        id: 1-13,
      },
      {
        name: '당근',
        id: 1-14,
      },
      {
        name: '후추',
        id: 1-15,
      },
      {
        name: '멸치액젓',
        id: 1-16,
      },
      {
        name: '소주',
        id: 1-17,
      },
      {
        name: '닭고기',
        id: 1-18,
      },
      {
        name: '소고기',
        id: 1-19,
      },
      {
        name: '밥',
        id: 1-20,
      },
    ],
  },

];

export default class RecipeIngredients extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionedMultiSelect
          items={items}
          IconRenderer={Icon}
          uniqueKey="id"
          subKey="ingredients"
          selectText="재료를 선택해주세요"
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
