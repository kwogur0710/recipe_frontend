import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, Colors } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecipeListScreen = () => {
    const navigation = useNavigation();
    const RecipeData = [
      {
        name: '레시피1'
      },
      {
        name: '레시피2'
      },
      {
        name: '레시피3'
      },
      {
        name: '레시피4'
      },
      {
        name: '레시피5'
      },
      {
        name: '레시피6'
      },
      {
        name: '레시피7'
      }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.searchFrame}>
                <View style={styles.BackButton}></View>
                <View style={styles.search}>
                    <Text style={{ fontSize: 30 }}></Text>
                </View>
                <View style={styles.searchButton}></View>
            </View>
            <View style={styles.arrayFrame}>
                <View style={styles.array}>
                    <View>

                        <Text style={styles.arrayFont}>최신순</Text>
                    </View>
                </View>
                <View style={styles.array}>
                    <Text style={styles.arrayFont}>한식</Text>
                </View>
                <View style={styles.array}>
                    <Text style={styles.arrayFont}>재료선택</Text>
                </View>
            </View>
            <View style={styles.recipeList}>
                <FlatList data={RecipeData} keyExtractor={(index) => index} renderItem={({item}) => {
                  return (
                    <View style={styles.recipeListFrame}>
                    <View style={styles.recipeListFrameImage}>
                        <Text style={styles.titleFont}>사진</Text>
                    </View>
                    <View style={styles.recipeListFrameData}>
                        <View style={styles.recipeListFrameDataTitle}>
                            <Text style={styles.titleFont}>{item}</Text>
                        </View>
                        <View style={styles.recipeListFrameDataReaction}>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}>
                                    <Text style={styles.reactionFont}>좋아요 수</Text>
                                </View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}>
                                    <Text style={styles.reactionFont}>공유 수</Text>
                                </View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}>
                                    <Text style={styles.reactionFont}>조회수</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                  );
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        marginTop: '15%', //위쪽 마진 : 10%
        marginBottom: '10%', //아래쪽 마진 : 10%
        marginLeft: '5%', //왼쪽 마진 : 10%
        marginRight: '5%', //오른쪽 마진 : 10%
    },

    searchFrame: {
        //검색창 프레임
        height: '6%', //높이 : '10%'
        borderWidth: 3, //테두리 굵기
        borderColor: '#6524FF', //테두리 색깔
        borderRadius: 100, //테두리 둥글게 하는 수치
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        backgroundColor: '#6524FF', // 바탕색
    },
    BackButton: {
        //이전버튼
        borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: '12%', //너비 : '11%'
        marginLeft: '5%', //왼쪽 마진 : '5%'
        borderColor: 'white', //테두리 색깔
    },
    search: {
        //검색창
        //borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: '60%', //너비 : '78%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    searchButton: {
        //검색버튼
        borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: '12%', //너비 : '11%'
        marginRight: '5%', //오른쪽 마진 : '5%'
        borderColor: 'white', //테두리 색깔
    },

    arrayFrame: {
        //정렬 프레임
        borderWidth: 0, //테두리 굵기
        height: '5%', //높이 : '50%'
        width: '100%', //너비 : '100%'
        marginTop: '3%', //위쪽 마진 : 3%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    array: {
        //정렬 버튼
        borderWidth: 1, //테두리 굵기
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },

    recipeList: {
        //레시피 리스트(아랫몸)
        borderWidth: 0, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        width: '100%', //너비 : '100%'
        height: '100%', //높이 : '100%'
    },
    recipeListFrame: {
        //레시피 리스트 프레임(오른쪽 왼쪽 나누는 프레임)
        borderWidth: 0, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        width: '100%', //너비 : '100%'
        height: '10%', //높이 : '10%'
        marginTop: '5%', //위쪽 마진 : 5%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameImage: {
        //레시피 리스트 프레임(왼쪽 이미지)
        borderWidth: 1, //테두리 굵기
        width: '25%', //너비 : '35%'
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameData: {
        //레시피 리스트 오른쪽 프레임(3줄)
        borderWidth: 0, //테두리 굵기
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameDataTitle: {
        //레시피 리스트 오른쪽 제목
        borderWidth: 1, //테두리 굵기
        flex: 1,
        width: '100%', //너비 : '100%'
        alignItems: 'flex-start', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameDataReaction: {
        //레시피 리스트 오른쪽 반응들
        borderWidth: 0, //테두리 굵기
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameDataReactionFrame: {
        //레시피 리스트 오른쪽 반응 프레임(이미지 + 텍스트)
        borderWidth: 0,
        flex: 1,
        width: '100%', //너비 : '100%'
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameDataReactionImage: {
        //레시피 리스트 오른쪽 반응 이미지
        borderWidth: 1,
        width: '45%', //너비 : '100%'
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameDataReactionText: {
        //레시피 리스트 오른쪽 반응 텍스트
        borderWidth: 1,
        width: '55%', //너비 : '100%'
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },

    goodwordFont: {
        //추천 단어 폰트
        color: 'white',
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: 15,
    },
    arrayFont: {
        //필터 폰트
        fontSize: 20,
    },
    titleFont: {
        //레시피 이름 폰트
        fontSize: 20,
        marginLeft: '5%',
    },
    reactionFont: {
        //반응 숫자 폰트
        fontSize: 10,
    },
});

export default RecipeListScreen;
