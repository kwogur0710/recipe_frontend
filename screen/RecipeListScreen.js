import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { height, marginWidth, width } from '../config/globalStyles';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Colors,
    FlatList,
    SafeAreaView,
    Image,
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RecipeListScreen = ({ route }) => {
    const navigation = useNavigation();
    const TypeName = useState(route.params?.title);
    const RecipeData = [
        {
            id: '1001',
            type: '한식',
            title: '설렁탕',
            love: 650,
            follow: 340,
            img: require('../image/korean_food/image_1.jpeg'),
        },
        {
            id: '1002',
            type: '한식',
            title: '김치찌개',
            love: 592,
            follow: 234,
            img: require('../image/korean_food/image_2.jpeg'),
        },
        {
            id: '1003',
            type: '한식',
            title: '김밥',
            love: 312,
            follow: 364,
            img: require('../image/korean_food/image_3.jpeg'),
        },
        {
            id: '1004',
            type: '한식',
            title: '미역국',
            love: 342,
            follow: 754,
            img: require('../image/korean_food/image_4.jpeg'),
        },
        {
            id: '1005',
            type: '한식',
            title: '닭백숙',
            love: 123,
            follow: 343,
            img: require('../image/korean_food/image_5.jpeg'),
        },
        {
            id: '1006',
            type: '한식',
            title: '비빔밥',
            love: 234,
            follow: 263,
            img: require('../image/korean_food/image_6.jpeg'),
        },
        {
            id: '1007',
            type: '한식',
            title: '갈치조림',
            love: 435,
            follow: 642,
            img: require('../image/korean_food/image_7.jpeg'),
        },
        {
            id: '1008',
            type: '한식',
            title: '불고기',
            love: 765,
            follow: 432,
            img: require('../image/korean_food/image_8.jpeg'),
        },
        {
            id: '1009',
            type: '한식',
            title: '부추무침',
            love: 95,
            follow: 42,
            img: require('../image/korean_food/boochoo.jpg'),
        },
        {
            id: '1010',
            type: '한식',
            title: '참치주먹밥',
            love: 999,
            follow: 999,
            img: require('../image/korean_food/joomukbob.jpg'),
        },
        {
            id: '2001',
            type: '일식',
            title: '덴푸라',
            love: 122,
            follow: 43,
            img: require('../image/japanese_food/denpura.jpg'),
        },
        {
            id: '2002',
            type: '일식',
            title: '돈코츠 라멘',
            love: 425,
            follow: 243,
            img: require('../image/japanese_food/donkoturamen.jpg'),
        },
        {
            id: '2003',
            type: '일식',
            title: '두부유부초밥',
            love: 522,
            follow: 153,
            img: require('../image/japanese_food/dubuyubu.jpg'),
        },
        {
            id: '2004',
            type: '일식',
            title: '어묵우동',
            love: 52,
            follow: 0,
            img: require('../image/japanese_food/emukudong.jpg'),
        },
        {
            id: '2005',
            type: '일식',
            title: '가라아게',
            love: 22,
            follow: 4,
            img: require('../image/japanese_food/karaage.jpg'),
        },
        {
            id: '2006',
            type: '일식',
            title: '규동',
            love: 12,
            follow: 3,
            img: require('../image/japanese_food/kudong.jpg'),
        },
        {
            id: '2007',
            type: '일식',
            title: '모츠나베',
            love: 0,
            follow: 0,
            img: require('../image/japanese_food/mochunabe.jpg'),
        },
        {
            id: '2008',
            type: '일식',
            title: '오니기리',
            love: 333,
            follow: 43,
            img: require('../image/japanese_food/onigiri.jpg'),
        },
        {
            id: '2009',
            type: '일식',
            title: '야끼우동',
            love: 149,
            follow: 111,
            img: require('../image/japanese_food/yakiudong.jpg'),
        },
        {
            id: '2010',
            type: '일식',
            title: '연어초밥',
            love: 367,
            follow: 13,
            img: require('../image/japanese_food/yenususi.jpg'),
        },
        {
            id: '3001',
            type: '중식',
            title: '짜장면',
            love: 882,
            follow: 522,
            img: require('../image/chinese_food/jajang.jpg'),
        },
        {
            id: '3002',
            type: '중식',
            title: '짬뽕',
            love: 672,
            follow: 323,
            img: require('../image/chinese_food/jjambbong.jpg'),
        },
        {
            id: '3003',
            type: '중식',
            title: '깐풍기',
            love: 623,
            follow: 113,
            img: require('../image/chinese_food/kkanpungki.jpg'),
        },
        {
            id: '3004',
            type: '중식',
            title: '마라탕',
            love: 1,
            follow: 1,
            img: require('../image/chinese_food/mara.jpg'),
        },
        {
            id: '3005',
            type: '중식',
            title: '난자완스',
            love: 65,
            follow: 3,
            img: require('../image/chinese_food/nanja.jpg'),
        },
        {
            id: '3006',
            type: '중식',
            title: '팔보채',
            love: 82,
            follow: 31,
            img: require('../image/chinese_food/palbo.jpg'),
        },
        {
            id: '3007',
            type: '중식',
            title: '탕수육',
            love: 777,
            follow: 555,
            img: require('../image/chinese_food/tangsu.jpg'),
        },
        {
            id: '3008',
            type: '중식',
            title: '양장피',
            love: 61,
            follow: 21,
            img: require('../image/chinese_food/yangjangpi.jpg'),
        },
        {
            id: '3009',
            type: '중식',
            title: '고추잡채',
            love: 72,
            follow: 23,
            img: require('../image/chinese_food/gocu.jpg'),
        },
        {
            id: '3010',
            type: '중식',
            title: '딤섬',
            love: 11,
            follow: 3,
            img: require('../image/chinese_food/dimsum.jpg'),
        },
        {
            id: '4001',
            type: '양식',
            title: '치킨 또띠아',
            love: 110,
            follow: 32,
            img: require('../image/western_food/chikin.jpg'),
        },
        {
            id: '4002',
            type: '양식',
            title: '크림 파스타',
            love: 999,
            follow: 262,
            img: require('../image/western_food/creampasta.jpg'),
        },
        {
            id: '4003',
            type: '양식',
            title: '고르곤졸라 피자',
            love: 683,
            follow: 435,
            img: require('../image/western_food/gorgon.jpg'),
        },
        {
            id: '4004',
            type: '양식',
            title: '햄버거',
            love: 829,
            follow: 145,
            img: require('../image/western_food/hambuk.jpg'),
        },
        {
            id: '4005',
            type: '양식',
            title: '로제 파스타',
            love: 999,
            follow: 255,
            img: require('../image/western_food/lojepasta.jpg'),
        },
        {
            id: '4006',
            type: '양식',
            title: '티본 스테이크',
            love: 760,
            follow: 562,
            img: require('../image/western_food/tibon.jpg'),
        },
        {
            id: '4007',
            type: '양식',
            title: '토마호크 스테이크',
            love: 321,
            follow: 33,
            img: require('../image/western_food/tomahork.jpg'),
        },
        {
            id: '4008',
            type: '양식',
            title: '토마토 파스타',
            love: 120,
            follow: 11,
            img: require('../image/western_food/tomatopasta.jpg'),
        },
        {
            id: '4009',
            type: '양식',
            title: '토마토 스프',
            love: 110,
            follow: 32,
            img: require('../image/western_food/tomatosupe.jpg'),
        },
        {
            id: '4010',
            type: '양식',
            title: '또띠아 피자',
            love: 150,
            follow: 2,
            img: require('../image/western_food/ttotiapija.jpg'),
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
                    <TextInput style={{ width: '100%', height: '100%', fontSize: 20 }} />
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
                    <Text style={styles.arrayFont}> {TypeName} </Text>
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
                    keyExtractor={(item) => String(item.id)}
                    style={{ margin: 5, width: 354 }}
                    columnWrapperStyle={{ flex: 1, justifyContent: 'space-around' }}
                    renderItem={({ item }) => {
                        return TypeName.some((value) => value === item.type) ? (
                            <View style={styles.recipeListFrame}>
                                <View>
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
                        ) : null;
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
        height: height * 204, //높이
        marginBottom: height * 4, //마진 : 5%
    },
    recipeListFrameTitle: {
        //레시피 리스트 프레임(제목)
        borderWidth: 1, //테두리 굵기
        width: width * 160, //너비
        height: height * 28, //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameReaction: {
        //레시피 리스트 리액션
        width: width * 160, //너비
        height: height * 22, //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameReactionFrame: {
        //레시피 리스트 리액션 프레임(이미지 + 텍스트)
        flex: 1,
        height: '100%', //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameReactionImage: {
        //레시피 리스트 리액션 이미지
        flex: 2,
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameReactionText: {
        //레시피 리스트 리액션 텍스트
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
