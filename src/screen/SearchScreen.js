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
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { RecipeData } from "../../config/RecipeData";
import { Feather } from "@expo/vector-icons";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const onUpdateSearch = (text) => {
    setSearch(text);
  };

  const RecipeFilter = (item) => {
    let a = "false";
    if (a === "false") {
      if (item.title.includes(search)) {
        a = "true";
        console.log(a, "push");
      }
    }
    return a;
  };

  console.log(search);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchFrame}>
        <TextInput
          placeholder={"검색어를 입력하세요"}
          placeholderTextColor={"#D5D5D5"}
          containerStyle={styles.searchBarContainer}
          onChangeText={onUpdateSearch}
          style={{
            fontSize: 15,
            color: "black",
            fontFamily: "PretendardSemiBold",
            width : width * 250,
          }}
          value={search}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.TopBtn}
            onPress={() => {
              navigation.navigate("SearchScreen");
            }}
          >
            <Feather
              name="search"
              size={30}
              color="black"
              style={{ marginRight: width * 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={RecipeData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return search &&
            search.length > 0 &&
            RecipeFilter(item) === "true" ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RecipeBoardScreen", {
                  item: item,
                })
              }
            >
              <View style={styles.recipeList}>
                <View style={styles.recipeListFrame}>
                  <View>
                    <Image source={item.img} style={styles.recipeListImg} />
                  </View>

                  <View style={styles.recipeListTextFrame}>
                    <Text style={styles.recipeTitleTextFont}>{item.title}</Text>
                    <Text style={styles.materialTextFont}>
                      {item.material.toString().replace(/\,/gi, " ")}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.recipeTextFont}>
                          시간 : {item.time}분
                        </Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.recipeTextFont}>
                          난이도 : {item.difficulty}
                        </Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.recipeTextFont}>
                          인분 : {item.serving}인분
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "flex-end",
                        flexDirection: "row",
                      }}
                    >
                      <Feather
                        name="heart"
                        size={20}
                        color="red"
                        style={{ marginRight: width * 5 }}
                      />
                      <Text style={styles.recipeTextFont}>33</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ) : null;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingTop: Platform.OS === "android" ? height * 40 : 0,
  },
  searchFrame: {
    height: height * 40, //높이
    width: width * 320, //너비
    flexDirection: "row", //정렬방향
    alignItems: "center", //가로정렬
    justifyContent: "flex-start", //세로정렬
    paddingTop: height * 4,
    paddingBottom: height * 4,
    paddingRight: width * 20,
    paddingLeft: width * 20,
    borderBottomWidth: 1,
    borderColor: "#939597",
    backgroundColor: "#939597",
    marginLeft: height * 15,
    marginRight: height * 15,
    borderRadius: 14,
  },
  TextInputTop: {
    //금주의 레시피 프레임
    height: height * 40, //높이
    width: "100%", //너비
    alignItems: "center", //가로정렬 : 중앙
    justifyContent: "center", //세로정렬 : 중앙
    marginTop: height * 10, //위쪽 마진
  },

  TopBtn: {
    alignItems: "center", //가로정렬
    justifyContent: "center", //세로정렬
    marginRight: width * 2,
    marginLeft: width * 2,
  },
  TypeNameFont: {
    fontSize: height * 20,
    fontFamily: "PretendardBold",
  },
  searchBarContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  recipeList: {
    paddingTop: height * 6,
    paddingBottom: height * 6,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  recipeListFrame: {
    flexDirection: "row",
    width: width * 320,
    height: height * 80,
    borderRadius: 10,
  },
  recipeListImg: {
    width: width * 100,
    height: height * 80,
    borderRadius: 10,
  },
  recipeListTextFrame: {
    padding: height * 4,
    width: width * 214,
    height: height * 80,
  },
  TypeImg: {
    width: 10,
    height: 10,
  },
  recipeTitleTextFont: {
    fontSize: height * 20,
    height: height * 26,
    paddingBottom: height * 4,
    fontFamily: "PretendardSemiBold",
  },
  materialTextFont: {
    fontSize: height * 12,
    height: height * 16,
    marginBottom: height * 2,
    fontFamily: "PretendardRegular",
  },
  recipeTextFont: {
    fontSize: height * 12,
    height: height * 16,
    marginBottom: height * 2,
    fontFamily: "PretendardRegular",
  },
});

export default SearchScreen;
