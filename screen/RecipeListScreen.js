import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { height, marginWidth, width } from '../config/globalStyles';
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
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialIcons";

const RecipeListScreen = () => {
    const navigation = useNavigation();
    const RecipeData = [
        {
            title: '설렁탕',
            love: 650,
            follow: 340,
            img: require('../image/image_1.jpeg'),
        },
        {
            title: '김치찌개',
            love: 592,
            follow: 234,
            img: require('../image/image_2.jpeg'),
        },
        {
            title: '김밥',
            love: 312,
            follow: 364,
            img: require('../image/image_3.jpeg'),
        },
        {
            title: '미역국',
            love: 342,
            follow: 754,
            img: require('../image/image_4.jpeg'),
        },
        {
            title: '닭백숙',
            love: 123,
            follow: 343,
            img: require('../image/image_5.jpeg'),
        },
        {
            title: '비빔밥',
            love: 234,
            follow: 263,
            img: require('../image/image_6.jpeg'),
        },
        {
            title: '갈치조림',
            love: 435,
            follow: 642,
            img: require('../image/image_7.jpeg'),
        },
        {
            title: '불고기',
            love: 765,
            follow: 432,
            img: require('../image/image_8.jpeg'),
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchFrame}>
                <View style={styles.backButton}>
                    <Image
                        source={require('../image/icon/back.png')}
                        style={{ width: width * 34, height: width * 34 }}
                    />
                </View>
                <View style={styles.search}>
                    <TextInput style={{width:'100%',height:'100%', fontSize:20}} />
                </View>
                <View style={styles.searchButton}>
                    <Image
                        source={require('../image/icon/search.png')}
                        style={{ width: width * 32, height: width * 32 }}
                    />
                </View>
            </View>
            <View style={styles.arrayFrame}>
                <View style={styles.array}>
                    <View>
                        <Text style={styles.arrayFont}>추천순</Text>
                    </View>
                </View>
                <View style={styles.array}>
                    <Text style={styles.arrayFont}> 한식 </Text>
                </View>
                <View style={styles.array}>
                    <TouchableOpacity onPress={() => navigation.navigate('RecipeIngredients')}>
                        <Text style={styles.arrayFont}>재료선택</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.recipeList}>
                <FlatList
                    data={RecipeData}
                    numColumns={2}
                    keyExtractor={(item) => JSON.stringify(item)}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.recipeListFrame}>
                                <View style={styles.recipeListFrameImage}>
                                    <Image
                                        source={item.img}
                                        style={{ width: width * 158, height: width * 158 }}
                                    />
                                </View>
                                <View style={styles.recipeListFrameTitle}>
                                    <Text style={styles.titleFont}>{item.title}</Text>
                                </View>
                                <View style={styles.recipeListFrameReaction}>
                                    <View style={styles.recipeListFrameReactionFrame}>
                                        <View style={styles.recipeListFrameReactionImage}>
                                            <Image
                                                source={require('../image/icon/heart.png')}
                                                style={{ width: width * 22, height: width * 22 }}
                                            />
                                        </View>
                                        <View style={styles.recipeListFrameReactionText}>
                                            <Text style={styles.reactionFont}>{item.love}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.recipeListFrameReactionFrame}>
                                        <View style={styles.recipeListFrameReactionImage}>
                                            <Image
                                                source={require('../image/icon/share.png')}
                                                style={{ width: width * 22, height: width * 22 }}
                                            />
                                        </View>
                                        <View style={styles.recipeListFrameReactionText}>
                                            <Text style={styles.reactionFont}>{item.follow}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
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
    backButton: {
        //메뉴 아이콘
        //borderWidth: 1, //테두리 굵기
        height: height * 35, //높이
        width: width * 35, //너비
        marginLeft: width * 10, //왼쪽 마진
        justifyContent: 'center', //세로정렬 : 중앙
        alignItems: 'center', //가로정렬 : 중앙
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
        marginRight: width * 10, //왼쪽 마진
        justifyContent: 'center', //세로정렬 : 중앙
        alignItems: 'center', //가로정렬 : 중앙
    },

    arrayFrame: {
        //정렬 프레임
        borderWidth: 1, //테두리 굵기
        height: height * 26, //높이
        width: '100%', //너비
        marginTop: height * 6, //위쪽 마진
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
        //레시피 리스트 프레임
        //borderWidth: 1, //테두리 굵기
        justifyContent: 'center', //세로정렬 : 중앙
        alignItems: 'center', //가로정렬 : 중앙
        flex: 1,
        marginTop: height * 10,
    },
    recipeListFrame: {
        //레시피 리스트 프레임(위 아래 나누는 프레임)
        borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        width: width * 160, //너비
        height: height * 210, //높이
        marginBottom: height * 6, //마진 : 5%
    },
    recipeListFrameImage: {
        //레시피 리스트 프레임(이미지)
        //borderWidth: 1, //테두리 굵기
        width: width * 160, //너비 : '100%'
        height: width * 160, //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameTitle: {
        //레시피 리스트 프레임(제목)
        borderWidth: 1, //테두리 굵기
        width: width * 160, //너비
        height: height * 32, //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameReaction: {
        //레시피 리스트 리액션
        borderWidth: 1, //테두리 굵기
        width: width * 160, //너비
        height: height * 26, //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameReactionFrame: {
        //레시피 리스트 리액션 프레임(이미지 + 텍스트)
        //borderWidth: 1,
        flex: 1,
        height: '100%', //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameReactionImage: {
        //레시피 리스트 리액션 이미지
        //borderWidth: 1,
        flex: 2,
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameReactionText: {
        //레시피 리스트 리액션 텍스트
        //borderWidth: 1,
        flex: 3,
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },

    arrayFont: {
        //필터 폰트
        fontSize: width * 20,
    },
    titleFont: {
        //레시피 이름 폰트
        fontSize: width * 20,
    },
    reactionFont: {
        //반응 숫자 폰트
        fontSize: width * 14,
    },
});

export default RecipeListScreen;
