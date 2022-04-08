import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, Colors, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { height, marginWidth, width } from '../config/globalStyles';

const MainScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchFrame}>
                <View style={styles.menuButton}></View>
                <View style={styles.search}>
                    <Text style={{ fontSize: 30 }}></Text>
                </View>
                <View style={styles.searchButton}></View>
            </View>

            <View style={styles.weekRecipeFrame}>
                <View style={styles.weekRecipeText}>
                    <Text style={{ fontSize: 30 }}>금주의 레시피</Text>
                </View>
                <View style={styles.weekRecipeImageFrame}>
                    <View style={styles.weekRecipeImage}></View>
                    <View style={styles.weekRecipeImageBlank} />
                    <View style={styles.weekRecipeImage}>
                        <Text style={{ fontSize: 20 }}>레시피 게시글</Text>
                    </View>
                    <View style={styles.weekRecipeImageBlank} />
                    <View style={styles.weekRecipeImage}></View>
                </View>
                <View style={styles.weekRecipeBarFrame}>
                    <View style={styles.weekRecipeBar}></View>
                    <View style={styles.weekRecipeBarBlank} />
                    <View style={styles.weekRecipeBarColor}></View>
                    <View style={styles.weekRecipeBarBlank} />
                    <View style={styles.weekRecipeBar}></View>
                    <View style={styles.weekRecipeBarBlank} />
                    <View style={styles.weekRecipeBar}></View>
                </View>
            </View>

            <View style={styles.recipeTypeFrame}>
                <View style={styles.recipeTypeText}>
                    <Text style={{ fontSize: 30 }}>레시피 종류</Text>
                </View>
                <View style={styles.recipeTypeButtonwidthFrame}>
                    <View style={styles.recipeTypeButtonFrame}>
                        <TouchableOpacity onPress={() => navigation.navigate('RecipeListScreen')}>
                            <View style={styles.recipeTypeButtonImage}>
                                <Text style={{ fontSize: 20 }}>사진</Text>
                            </View>
                            <View style={styles.recipeTypeButtonText}>
                                <Text style={{ fontSize: 20 }}>한식</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recipeTypeButtonFrame}>
                        <TouchableOpacity onPress={() => navigation.navigate('RecipeListScreen')}>
                            <View style={styles.recipeTypeButtonImage}>
                                <Text style={{ fontSize: 20 }}>사진</Text>
                            </View>
                            <View style={styles.recipeTypeButtonText}>
                                <Text style={{ fontSize: 20 }}>일식</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recipeTypeButtonFrame}>
                        <TouchableOpacity onPress={() => navigation.navigate('RecipeListScreen')}>
                            <View style={styles.recipeTypeButtonImage}>
                                <Text style={{ fontSize: 20 }}>사진</Text>
                            </View>
                            <View style={styles.recipeTypeButtonText}>
                                <Text style={{ fontSize: 20 }}>중식</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recipeTypeButtonFrame}>
                        <TouchableOpacity onPress={() => navigation.navigate('RecipeListScreen')}>
                            <View style={styles.recipeTypeButtonImage}>
                                <Text style={{ fontSize: 20 }}>사진</Text>
                            </View>
                            <View style={styles.recipeTypeButtonText}>
                                <Text style={{ fontSize: 20 }}>양식</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.recipeVideoFrame}>
                <View style={styles.recipeVideoText}>
                    <Text style={{ fontSize: 30 }}>오늘은 이거다!</Text>
                </View>
                <View style={styles.recipeVideoYoutubeFrame}>
                    <View style={styles.recipeVideoYoutube}></View>
                    <View style={styles.recipeVideoYoutubeBlank}></View>
                    <View style={styles.recipeVideoYoutube}>
                        <Text style={{ fontSize: 20 }}>유튜브 영상</Text>
                    </View>
                    <View style={styles.recipeVideoYoutubeBlank}></View>
                    <View style={styles.recipeVideoYoutube}></View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        marginTop: height * 20, //마진 : 10%
        marginBottom: height * 20, //마진 : 10%
        marginLeft: width * 20,
        marginRight: width * 20,
    },

    searchFrame: {
        //검색창 프레임
        borderWidth: 3, //테두리 굵기
        height: height * 40, //높이
        width: '100%', //너비
        borderRadius: 15, //테두리 둥글게 하는 수치
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    menuButton: {
        //메뉴 아이콘
        //borderWidth: 1, //테두리 굵기
        height: height * 35, //높이
        width: width * 35, //너비
        marginLeft: width * 10, //왼쪽 마진
    },
    search: {
        //검색창
        //borderWidth: 1, //테두리 굵기
        flex: 1,
        height: height * 35, //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    searchButton: {
        //검색버튼
        //borderWidth: 1, //테두리 굵기
        height: height * 35, //높이
        width: width * 35, //너비
        marginRight: width * 10, //왼쪽 마진 : '5%'
    },

    weekRecipeFrame: {
        //금주의 레시피 프레임
        //borderWidth: 1, //테두리 굵기
        height: height * 206, //높이
        width: '100%', //너비
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        marginTop: height * 10, //위쪽 마진
    },
    weekRecipeText: {
        //금주의 레시피 글자
        //borderWidth: 1, //테두리 굵기
        flex: 1,
        width: '100%',
        alignItems: 'flex-start', //가로정렬 : 시작점
        justifyContent: 'center', //세로정렬 : 끝지점
    },

    weekRecipeImageFrame: {
        //금주의 레시피 이미지 프레임
        //borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: height * 153, //높이 : '30%'
        width: width * 272, //너비 : '100%'
        marginTop: height * 6, //위쪽 마진
    },
    weekRecipeImage: {
        //금주의 레시피 이미지
        borderWidth: 1, //테두리 굵기
        borderRadius: 10, //테두리 둥글게 하는 수치
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: height * 153, //높이 : '30%'
        width: width * 272, //너비 : '100%'
    },
    weekRecipeImageBlank: {
        //금주의 레시피 이미지 여백
        //borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: height * 126, //높이 : '30%'
        width: width * 10, //너비 : '10%'
    },

    weekRecipeBarFrame: {
        //금주의 레시피 하단바 프레임
        //borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignContent: 'space-between', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: height * 10, //높이
        width: width * 130, //너비
        marginTop: height * 6,
    },
    weekRecipeBar: {
        //금주의 레시피 하단바
        borderWidth: 1, //테두리 굵기
        borderRadius: 5, //테두리 둥글게 하는 수치
        height: '100%', //높이 : '100%'
        width: width * 24, //너비 : 25
    },
    weekRecipeBarColor: {
        //금주의 레시피 하단바 색깔
        borderWidth: 1, //테두리 굵기
        borderRadius: 10, //테두리 둥글게 하는 수치
        height: '100%', //높이 : '100%'
        width: width * 36, //너비
        backgroundColor: 'black', //바탕색
        borderColor: 'black', //윤곽색
    },
    weekRecipeBarBlank: {
        //금주의 레시피 하단바 여백
        //borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: width * 8, //너비 : 30
    },

    recipeTypeFrame: {
        //음식 종류 프레임
        //borderWidth: 1, //테두리 굵기
        height: height * 124, //높이
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬 : 중앙
        width: '100%', //너비 : '100%'
        marginTop: height * 10, //위쪽 마진
    },
    recipeTypeText: {
        //음식 종류 글자
        //borderWidth: 1, //테두리 굵기
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬
        width: '100%', //너비 : '100%'
    },
    recipeTypeButtonwidthFrame: {
        //음식 종류 버튼 폭 프레임
        //borderWidth: 1, //테두리 굵기
        height: height * 90, //높이 : 100%
        width: '100%', //너비 : '100%'
        marginTop: height * 4, //위쪽 마진 : 5%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeTypeButtonFrame: {
        //음식 종류 버튼 프레임
        //borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : 100%
        width: width * 70, //너비 : 20%
        marginRight: width * 16,
    },
    recipeTypeButtonImage: {
        //음식 종류 버튼 사진
        borderWidth: 1, //테두리 굵기
        height: '75%', //높이
        width: '100%', //너비
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeTypeButtonText: {
        //음식 종류 버튼 글자
        borderWidth: 1, //테두리 굵기
        height: '25%', //높이 : 30%
        width: '100%', //너비 : 100%
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },

    recipeVideoFrame: {
        //음식 영상 프레임
        //borderWidth: 1, //테두리 굵기
        height: height * 180, //높이
        width: '100%', //너비
        alignItems: 'center', //가로정렬
        justifyContent: 'center', //세로정렬
        marginTop: height * 5, //위쪽 마진
    },
    recipeVideoText: {
        //borderWidth: 1, //테두리 굵기
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬 : 끝지점
        height: height * 30, //높이 : '30%'
        width: '100%', //너비 : '100%'
    },
    recipeVideoYoutubeFrame: {
        //borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: height * 144, //높이 : '30%'
        width: width * 256, //너비 : '100%'
        marginTop: height * 6, //위쪽 마진
    },
    recipeVideoYoutube: {
        borderWidth: 1, //테두리 굵기
        borderRadius: 10, //테두리 둥글게 하는 수치
        height: height * 144, //높이 : '30%'
        width: width * 256, //너비 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeVideoYoutubeBlank: {
        //borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '100%', //높이 : '100%'
        width: width * 5, //너비
    },
});

export default MainScreen;
