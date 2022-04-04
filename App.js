import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Alert } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.searchFrame}>
                <View style={styles.menuButton}></View>
                <View style={styles.search}>
                    <Text style={{ fontSize: 30 }}>검색창</Text>
                </View>
                <View style={styles.searchButton}></View>
            </View>

            <View style={styles.weekrecipeFrame}>
                <View style={styles.weekrecipeText}>
                    <Text style={{ marginLeft: 20, fontSize: 30 }}>
                        금주의 레시피
                    </Text>
                </View>
                <View style={styles.weekrecipeImageFrame}>
                    <View style={styles.weekrecipeImage}></View>
                    <View style={styles.weekrecipeImageBlank} />
                    <View style={styles.weekrecipeImage}></View>
                    <View style={styles.weekrecipeImageBlank} />
                    <View style={styles.weekrecipeImage}></View>
                </View>
                <View style={styles.weekrecipeBarFrame}>
                    <View style={styles.weekrecipeBar}></View>
                    <View style={styles.weekrecipeBarBlank} />
                    <View style={styles.weekrecipeBarColor}></View>
                    <View style={styles.weekrecipeBarBlank} />
                    <View style={styles.weekrecipeBar}></View>
                    <View style={styles.weekrecipeBarBlank} />
                    <View style={styles.weekrecipeBar}></View>
                </View>
            </View>

            <View style={styles.recipeTypeFrame}>
                <View style={styles.recipeTypeFrameTop}>
                    <View style={styles.recipeType}>
                        <View style={styles.recipeTypeImage}></View>
                        <View style={styles.recipeTypeText}></View>
                    </View>
                    <View style={styles.recipeType}>
                        <View style={styles.recipeTypeImage}></View>
                        <View style={styles.recipeTypeText}></View>
                    </View>
                    <View style={styles.recipeType}>
                        <View style={styles.recipeTypeImage}></View>
                        <View style={styles.recipeTypeText}></View>
                    </View>
                </View>
                <View style={styles.recipeTypeFrameBottom}>
                    <View style={styles.recipeType}>
                        <View style={styles.recipeTypeImage}></View>
                        <View style={styles.recipeTypeText}></View>
                    </View>
                    <View style={styles.recipeType}>
                        <View style={styles.recipeTypeImage}></View>
                        <View style={styles.recipeTypeText}></View>
                    </View>
                    <View style={styles.recipeType}>
                        <View style={styles.recipeTypeImage}></View>
                        <View style={styles.recipeTypeText}></View>
                    </View>
                </View>
            </View>

            <View style={styles.recipeVideoFrame}>
                <View style={styles.recipeVideoText}>
                    <Text style={{ fontSize: 30, marginLeft: 20 }}>오늘은 이거다!</Text>
                </View>
                <View style={styles.recipeVideoYoutubeFrame}>
                <View style={styles.recipeVideoYoutube}></View>
                <View style={styles.recipeVideoYoutubeBlank}></View>
                <View style={styles.recipeVideoYoutube}></View>
                <View style={styles.recipeVideoYoutubeBlank}></View>
                <View style={styles.recipeVideoYoutube}></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
    },

    searchFrame: {
        //검색창 프레임
        borderWidth: 1, //테두리 굵기
        borderRadius: 50, //테두리 둥글게 하는 수치
        height: 40, //높이
        width: '90%', //너비 : '80%'
        marginTop: 20, //위쪽마진 : 20
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        backgroundColor: '#6524FF', // 바탕색
    },
    menuButton: {
        //메뉴 아이콘
        borderWidth: 1, //테두리 굵기
        borderRadius: 50, //테두리 둥글게 하는 수치
        height: '100%', //높이 : '100%'
        width: '11%', //너비 : '11%'
    },
    search: {
        //검색창
        borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: '78%', //너비 : '78%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    searchButton: {
        //검색버튼
        borderWidth: 1, //테두리 굵기
        borderRadius: 50, //테두리 둥글게 하는 수치
        height: '100%', //높이 : '100%'
        width: '11%', //너비 : '11%'
    },

    weekrecipeFrame: {
        //금주의 레시피 프레임
        borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '30%', //높이 : '30%'
        width: '100%', //너비 : '100%'
        margin: 10, //위쪽 마진 : 10
    },
    weekrecipeText: {
        //금주의 레시피 글자
        borderWidth: 1, //테두리 굵기
        alignItems: 'flex-start', //가로정렬 : 시작점
        justifyContent: 'center', //세로정렬 : 끝지점
        height: '20%', //높이 : '30%'
        width: '100%', //너비 : '100%'
    },

    weekrecipeImageFrame: {
        //금주의 레시피 이미지 프레임
        borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '60%', //높이 : '30%'
        width: '100%', //너비 : '100%'
    },
    weekrecipeImage: {
        //금주의 레시피 이미지
        borderWidth: 1, //테두리 굵기
        borderRadius: 20, //테두리 둥글게 하는 수치
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '100%', //높이 : '100%'
        width: '60%', //너비 : '60%'
    },
    weekrecipeImageBlank: {
        //금주의 레시피 이미지 여백
        borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '100%', //높이 : '100%'
        width: '5%', //너비 : '10%'
    },

    weekrecipeBarFrame: {
        //금주의 레시피 하단바 프레임
        borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignContent: 'space-between', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '10%', //높이 : '10%'
        width: '40%', //너비 : '40%'
        marginTop: 10, //위쪽마진 : 10
    },
    weekrecipeBar: {
        //금주의 레시피 하단바
        borderWidth: 2, //테두리 굵기
        borderColor: '#6524FF', //윤곽색
        borderRadius: 50, //테두리 둥글게 하는 수치
        height: '100%', //높이 : '100%'
        width: 25, //너비 : 25
    },
    weekrecipeBarColor: {
        //금주의 레시피 하단바 색깔
        borderWidth: 2, //테두리 굵기
        borderColor: '#6524FF', //윤곽색
        borderRadius: 50, //테두리 둥글게 하는 수치
        height: '100%', //높이 : '100%'
        width: 40, //너비 : 40
        backgroundColor: '#6524FF', //바탕색
    },
    weekrecipeBarBlank: {
        //금주의 레시피 하단바 여백
        borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: 10, //너비 : 30
    },

    recipeTypeFrame: {
        //음식 종류 프레임
        borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '20%', //높이 : '20%'
        width: '100%', //너비 : '100%'
    },
    recipeTypeFrameTop: {
        //음식 종류 위 프레임
        borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'space-around', //세로정렬 : 여백포함 간격 일정하게
        height: '50%', //높이 : '50%'
        width: '80%', //너비 : '80%'
    },
    recipeTypeFrameBottom: {
        //음식 종류 아래 프레임
        borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'space-around', //세로정렬 : 여백포함 간격 일정하게
        height: '50%', //높이 : '50%'
        width: '80%', //너비 : '80%'
    },
    recipeType: {
        //음식 종류 프레임
        borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : 70
        width: 60, //너비 : 60
    },
    recipeTypeImage: {
        //음식 종류 사진
        borderWidth: 1, //테두리 굵기
        height: '70%', //높이 : 70%
        width: '100%', //너비 : 100%
    },
    recipeTypeText: {
        //음식 종류 위 글자
        borderWidth: 1, //테두리 굵기
        height: '30%', //높이 : 30%
        width: '100%', //너비 : 100%
    },

    recipeVideoFrame: {
        //음식 영상 프레임
        borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '30%', //높이 : '30%'
        width: '100%', //너비 : '100%'
        margin: 10, //위쪽 마진 : 10
    },
    recipeVideoText: {
        borderWidth: 1, //테두리 굵기
        alignItems: 'flex-start', //가로정렬 : 시작점
        justifyContent: 'center', //세로정렬 : 끝지점
        height: '20%', //높이 : '30%'
        width: '100%', //너비 : '100%'
    },
    recipeVideoYoutubeFrame: {
        borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '80%', //높이 : '80%'
        width: '100%', //너비 : '100%'
    },
    recipeVideoYoutube: {
      borderWidth: 1, //테두리 굵기
      alignItems: 'center', //가로정렬 : 중앙
      justifyContent: 'center', //세로정렬 : 중앙
      borderRadius: 30, //테두리 둥글게 하는 수치
      height: '100%', //높이 : '100%'
      width: '80%', //너비 : '80%'
  },
    recipeVideoYoutubeBlank: {
      borderWidth: 1, //테두리 굵기
      alignItems: 'center', //가로정렬 : 중앙
      justifyContent: 'center', //세로정렬 : 중앙
      height: '100%', //높이 : '100%'
      width: '5%', //너비 : '80%'
    },
});