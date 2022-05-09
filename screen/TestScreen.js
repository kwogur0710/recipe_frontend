import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,SafeAreaView,} from 'react-native';
import { height, marginWidth, width } from '../config/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


type Props = {};
export default class App extends Recipeboard1<Props> {
  render() {
    return (
<<<<<<< HEAD
      <SafeAreaView style={styles.container}>
        <ScrollView>
      <View>
        <Image
            style={styles.img}
            source={require('../image/korean_food/image_1.jpeg')}/>
        </View>
        <View style={{FlexDirection:'row',alignItems:'center',bottom:60}}>
        <View style={{width:120, height:120, backgroundColor:'8b00ff',borderRadius:50}}></View>
        </View>
        <View style={{bottom:150}}>
        <View style={{FlexDirection:'row',alignItems:'flex-end'}}>
        <View style={{top:60,right:22}}><Text>77</Text></View>
        <View style={{top:20,right:22}}><Text>77</Text></View>
        <Image
            style={{width:20, height:20}}
            source={require('../image/icon/heart.png')}/>
            <Image
            style={{width:20, height:20}}
            source={require('../image/icon/share.png')}/>
        </View>
        <View style={{marginLeft: 30}}>
        <View><Text style={styles.text_1}>설렁탕</Text></View>
        <View><Text style={styles.text_2}>소요시간 : 30분</Text></View>
        <View><Text style={styles.text_2}>난이도 : ✿✿</Text></View>
        </View>
        <View style={styles.border}></View>
        <View style={{marginLeft: 30}}>
        <View><Text style={styles.text_2}>재료</Text></View>
        <View><Text style={styles.text_3}>소 사골 2Kg{"\n"}소주(소주잔) 2컵{"\n"}소고기사태 816g{"\n"}쌀뜨물 적당량{"\n"}파뿌리 1+1/2컵{"\n"}통후추 3t{"\n"}파 적당량{"\n"}소금 적당량</Text></View>
        </View>
        <View style={styles.border}></View>
        <View style={{marginLeft: 30}}>
        <View><Text style={styles.text_2}>조리 순서</Text></View>
        <View><Text style={styles.text_3}>1. 소주를 희석시킨물에 소사골을 담궈놓습니다.{"\n"} 2. 사태도 적당한 크기로 잘라 물에 담궈 핏물을 뺍니다.{"\n"} 3. 사골을 넣고 한소끔 끓입니다.{"\n"} 4. 한소끔 끓인 사골은 찬물에 헹궈 놓습니다.{"\n"} 5. 냄비에 쌀뜨물을 붓고 끓입니다.{"\n"} 6. 다시망 두개를 만듭니다.{"\n"} 7. 물이 끓으면 다시망을 넣고 사골을 넣어 푹 고아냅니다.{"\n"} 8. 사태도 기호에 맞게 삶아 냅니다.{"\n"} 9. 삶아낸 사태는 식이후 썰어줍니다.{"\n"} 10. 뚝배기에 불린당면 육수 사태를 넣고 끓입니다.{"\n"} 11. 파를 넣고 식탁에 냅니다.'</Text></View>
        </View>
        </View>
        </ScrollView>
      </SafeAreaView>
=======
        <SafeAreaView style={styles.container}>
                <View style={styles.View1}>
                    <Text style={styles.Text1}> 설정 </Text>
                </View>
                <View style={styles.View1}>
                    <Text style={styles.Text1}> 설정 </Text>
                </View>
                <View style={styles.View1}>
                    <Text style={styles.Text1}> 설정 </Text>
                </View>
        </SafeAreaView>
>>>>>>> 6c5fbd786617e425b2007af3766318ba4ca9fa44
    );
  }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    //바탕
    flex: 1,
    alignItems: 'center', //가로정렬 : 중앙
    paddingTop: Platform.OS === 'android' ? 40 : 0,
    marginBottom: height * 20, //마진 : 10%
    marginLeft: width * 20,
    marginRight: width * 20,
},
  img: { //사진크기
    width:"100%",
    height: 300,
    resizeMode:'contain',
  },
  border:{
    borderTopWidth:10,
    borderColor: '#8b00ff'
  },
text_1:{
  fontSize: 40
},
text_2:{
  fontSize: 25
},
text_3:{
  fontSize: 15,
  marginLeft: 10
}
=======
    container: {
        flex: 1,
    },
    View1: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    Text1: {
        fontSize: 20,
    },
});
>>>>>>> 6c5fbd786617e425b2007af3766318ba4ca9fa44

});