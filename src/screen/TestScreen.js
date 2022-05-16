import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { height, marginWidth, width } from "../../config/globalStyles";

const TestScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.View7}>
        <Image
          source={require("../../image/icon/profile.png")}
          style={styles.View11}
        />

        <Text style={styles.Text2}> SAU Recipe </Text>
      </View>

      

      <View style={styles.View7}>
        <Image
          source={require("../../image/icon/heart.png")}
          style={styles.View8}
        />
        <Text style={styles.Text1}> 좋아요 </Text>
      </View>

     

      <View style={styles.View7}>
        <Image
          source={require("../../image/icon/help.png")}
          style={styles.View8}
        />
        <Text style={styles.Text1}> 도움말 </Text>
      </View>

      <View style={styles.View7}>
        <Image
          source={require("../../image/icon/megaphone.png")}
          style={styles.View8}
        />
        <Text style={styles.Text1}> 공지사항 </Text>
      </View>

      

      <View style={styles.View7}>
        <Image
          source={require("../../image/icon/setting.png")}
          style={styles.View8}
        />
        <Text style={styles.Text1}> 설정 </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //바탕
    flex: 1,
    alignItems: "center", //가로정렬 : 중앙
    paddingTop: Platform.OS === "android" ? 40 : 0,
    marginBottom: height * 20, //마진 : 10%
  },
  View1: {
    borderBottomWidth: 0.2,
    justifyContent: "center",
    height: height * 40,
    width: "100%",
  },
  container2: {
    height: height * 84,
    width: "100%",
    borderWidth: 1,
    flexDirection: "row",
  },
  View2: {
    borderBottomWidth: 0.5,
    borderRightWidth: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  View6: {
    borderBottomWidth: 0.5,
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "gray",
    width: "100%",
  },
  View7: {
    flexDirection: "row",
    borderBottomWidth: 0.1,
    height: height * 50,
    width: "100%",

    justifyContent: "flex-start",
    alignItems: "center",
  },
  View8: {
    width: width * 20,
    height: width * 20,
    marginRight: 20,
    marginBottom: 6,
    marginLeft: 10,
    marginTop: 10,
  },
  View9: {
    width: width * 40,
    height: width * 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  View10: {
    flexDirection: "row",
    borderBottomWidth: 0.2,
    height: height * 20,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  View11: {
    width: width * 50,
    height: width * 50,
    marginRight: 20,
    marginBottom: 6,
    marginLeft: 10,
    borderRadius:100,
  },

  Text1: {
    fontSize: 15,
  },
  Text2: {
    fontSize: 30,
  },
  Text3: {
    fontSize: 15,
  },
  Text4: {
    fontSize: 10,
    marginLeft: 20,
    marginTop: 5,
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  searchFrame: {
    //검색창 프레임
    borderWidth: 3, //테두리 굵기
    height: height * 40, //높이
    width: "100%", //너비
    borderRadius: 15, //테두리 둥글게 하는 수치
    flexDirection: "row", //정렬방향 : row(가로), column(세로)
    alignItems: "center", //가로정렬 : 중앙
    justifyContent: "center", //세로정렬 : 중앙
  },
});

export default TestScreen;
