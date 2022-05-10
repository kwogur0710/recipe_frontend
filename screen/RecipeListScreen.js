import React, { useState, useEffect } from 'react';
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
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RecipeData } from '../config/RecipeData';

const RecipeListScreen = ({ route }) => {
    const navigation = useNavigation();
    const TypeName = route.params?.type;
    const [parts, setParts] = useState(route.params?.parts);
    const [search, setSearch] = useState('');
    const onUpdateSearch = (text) => {
        setSearch(text);
        console.log(search);
    };
    useEffect(() => {
        setParts(route.params?.parts), [route.params?.parts];
        console.log(parts);
    });
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
                    <TextInput
                        placeholder={'메뉴를 입력하세요'}
                        placeholderTextColor={'#D5D5D5'}
                        containerStyle={styles.searchBarContainer}
                        onChangeText={onUpdateSearch}
                        style={{ width: '100%', height: '100%', fontSize: 20, color: 'black' }}
                        value={search}
                    />
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
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('RecipeIngredientsScreen', {
                                parts: parts,
                                type: TypeName,
                            })
                        }
                    >
                        <Text style={styles.arrayFont}>재료선택</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 2, flex: 1 }}>
                <FlatList
                    data={RecipeData.filter((value) => value.type == TypeName)}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => {
                        return item.title.includes(search) ||
                            item.recipeInMaterial.some((value) => value === search) ||
                            search === '' ? (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('RecipeBoardScreen', {
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
                                            <Text style={{ fontSize: 20, height: 22 }}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.recipeListTextFont}>
                                                {item.recipeInMaterial}
                                            </Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.recipeListTextFont}>
                                                        시간 : {item.recipeTime}분
                                                    </Text>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.recipeListTextFont}>
                                                        난이도 : {item.recipedifficulty}
                                                    </Text>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.recipeListTextFont}>
                                                        인분 : {item.recipeserving}인분
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        marginBottom: height * 20,
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
        borderWidth: 1, //테두리 굵기
        marginBottom: height * 4, //마진 : 5%
        borderRadius: 10,
    },
    recipeListFrame: {
        flexDirection: 'row',
        width: width * 344,
        height: height * 80,
        borderRadius: 10,
    },
    recipeListImg: {
        width: width * 100,
        height: height * 80,
        borderRadius: 10,
    },
    recipeListTextFrame: {
        padding: 4,
        width: width * 214,
        height: height * 80,
    },

    arrayFont: {
        fontSize: width * 20,
    },
    titleFont: {
        fontSize: width * 20,
    },
    reactionFont: {
        fontSize: width * 14,
    },
    recipeListTextFont: {
        marginTop: 6,
        fontSize: 14,
        height: 16,
    },
});

export default RecipeListScreen;
