import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, Colors } from 'react-native';

function MainScreen({ navigation }) {
    const renderPost = ({}) => (
        <View style={styles.container}>
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
                        <View style={styles.recipeTypeButtonImage}>
                            <Text style={{ fontSize: 20 }}>사진</Text>
                        </View>
                        <View style={styles.recipeTypeButtonText}>
                            <Text style={{ fontSize: 20 }}>일식</Text>
                        </View>
                    </View>
                    <View style={styles.recipeTypeButtonFrame}>
                        <View style={styles.recipeTypeButtonImage}>
                            <Text style={{ fontSize: 20 }}>사진</Text>
                        </View>
                        <View style={styles.recipeTypeButtonText}>
                            <Text style={{ fontSize: 20 }}>중식</Text>
                        </View>
                    </View>
                    <View style={styles.recipeTypeButtonFrame}>
                        <View style={styles.recipeTypeButtonImage}></View>
                        <View style={styles.recipeTypeButtonText}></View>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        marginTop: '15%', //아래쪽 마진 : 10%
        marginBottom: '10%', //아래쪽 마진 : 10%
    },

    searchFrame: {
        //검색창 프레임
        height: '6%', //높이 : '10%'
        borderWidth: 3, //테두리 굵기
        borderColor: '#6524FF', //테두리 색깔
        borderRadius: 100, //테두리 둥글게 하는 수치
        marginLeft: '5%', //왼쪽마진 : 5%
        marginRight: '5%', //오른쪽마진 : 5%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        backgroundColor: '#6524FF', // 바탕색
    },
    menuButton: {
        //메뉴 아이콘
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

    weekRecipeFrame: {
        //금주의 레시피 프레임
        //borderWidth: 1, //테두리 굵기
        height: '30%', //높이 : '10%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        width: '100%', //너비 : '100%'
        marginTop: '3%', //위쪽 마진 : 3%
    },
    weekRecipeText: {
        //금주의 레시피 글자
        //borderWidth: 1, //테두리 굵기
        alignItems: 'flex-start', //가로정렬 : 시작점
        justifyContent: 'center', //세로정렬 : 끝지점
        marginLeft: '10%',
        width: '100%', //너비 : '100%'
    },

    weekRecipeImageFrame: {
        //금주의 레시피 이미지 프레임
        //borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '55%', //높이 : '30%'
        width: '100%', //너비 : '100%'
        marginTop: '3%', //위쪽 마진 : 3%
    },
    weekRecipeImage: {
        //금주의 레시피 이미지
        borderWidth: 1, //테두리 굵기
        borderRadius: 20, //테두리 둥글게 하는 수치
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '100%', //높이 : '100%'
        width: '60%', //너비 : '60%'
    },
    weekRecipeImageBlank: {
        //금주의 레시피 이미지 여백
        //borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '100%', //높이 : '100%'
        width: '5%', //너비 : '10%'
    },

    weekRecipeBarFrame: {
        //금주의 레시피 하단바 프레임
        //borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignContent: 'space-between', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '6%', //높이 : '10%'
        width: '40%', //너비 : '40%'
        marginTop: '3%', //위쪽마진 : 10
    },
    weekRecipeBar: {
        //금주의 레시피 하단바
        borderWidth: 2, //테두리 굵기
        borderColor: '#6524FF', //윤곽색
        borderRadius: 10, //테두리 둥글게 하는 수치
        height: '100%', //높이 : '100%'
        width: 25, //너비 : 25
    },
    weekRecipeBarColor: {
        //금주의 레시피 하단바 색깔
        //borderWidth: 2, //테두리 굵기
        borderColor: '#6524FF', //윤곽색
        borderRadius: 10, //테두리 둥글게 하는 수치
        height: '100%', //높이 : '100%'
        width: 40, //너비 : 40
        backgroundColor: '#6524FF', //바탕색
    },
    weekRecipeBarBlank: {
        //금주의 레시피 하단바 여백
        //borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: 10, //너비 : 30
    },

    recipeTypeFrame: {
        //음식 종류 프레임
        height: '20%', //높이 : '10%'
        //borderWidth: 1, //테두리 굵기
        alignItems: 'flex-start', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        width: '100%', //너비 : '100%'
        marginTop: '3%', //위쪽 마진 : 3%
    },
    recipeTypeText: {
        //음식 종류 글자
        //borderWidth: 1, //테두리 굵기
        alignItems: 'flex-start', //가로정렬 : 시작점
        justifyContent: 'center', //세로정렬 : 끝지점
        marginLeft: '5%',
        width: '100%', //너비 : '100%'
    },
    recipeTypeButtonwidthFrame: {
        //음식 종류 버튼 폭 프레임
        //borderWidth: 1, //테두리 굵기
        height: '60%', //높이 : 100%
        width: '100%', //너비 : '100%'
        marginTop: '3%', //왼쪽 마진 : 5%
        marginLeft: '5%', //왼쪽 마진 : 5%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeTypeButtonFrame: {
        //음식 종류 버튼 프레임
        //borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : 100%
        width: '20%', //너비 : 20%
        marginRight: '10%',
    },
    recipeTypeButtonImage: {
        //음식 종류 버튼 사진
        borderWidth: 1, //테두리 굵기
        height: '70%', //높이 : 70%
        width: '100%', //너비 : 100%
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeTypeButtonText: {
        //음식 종류 버튼 글자
        borderWidth: 1, //테두리 굵기
        height: '30%', //높이 : 30%
        width: '100%', //너비 : 100%
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },

    recipeVideoFrame: {
        //음식 영상 프레임
        height: '30%', //높이 : '10%'
        //borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        width: '100%', //너비 : '100%'
        marginTop: '3%', //위쪽 마진 : 3%
    },
    recipeVideoText: {
        //borderWidth: 1, //테두리 굵기
        alignItems: 'flex-start', //가로정렬 : 시작점
        justifyContent: 'center', //세로정렬 : 끝지점
        height: '20%', //높이 : '30%'
        width: '100%', //너비 : '100%'
        marginLeft: '10%', //왼쪽 마진 : 10%
    },
    recipeVideoYoutubeFrame: {
        //borderWidth: 1, //테두리 굵기
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '70%', //높이 : '80%'
        width: '100%', //너비 : '100%'
        marginTop: '3%', //위쪽 마진 : 3%
    },
    recipeVideoYoutube: {
        borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        borderRadius: 20, //테두리 둥글게 하는 수치
        height: '100%', //높이 : '100%'
        width: '80%', //너비 : '80%'
    },
    recipeVideoYoutubeBlank: {
        //borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: '100%', //높이 : '100%'
        width: '5%', //너비 : '80%'
    },
});
