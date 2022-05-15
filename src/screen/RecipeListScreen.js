import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { height, marginWidth, width } from '../../config/globalStyles';
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
import { RecipeData } from '../../config/RecipeData';
import { Feather } from '@expo/vector-icons';

const RecipeListScreen = ({ route }) => {
    const navigation = useNavigation();
    const TypeName = route.params?.type;
    const [parts, setParts] = useState(route.params?.parts);
    const [search, setSearch] = useState('');
    const onUpdateSearch = (text) => {
        setSearch(text);
    };
    useEffect(() => {
        setParts(route.params?.parts), [route.params?.parts];
    });
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchFrame}>
                <Text style={styles.TypeNameFont}>{TypeName}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={styles.TopBtn}
                        onPress={() => {
                            navigation.navigate('RecipeIngredientsScreen');
                        }}
                    >
                        <Feather
                            name="filter"
                            size={30}
                            color="black"
                            style={{ marginRight: width * 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TopBtn} onPress={() => {
                            navigation.navigate('MainScreen');}}>
                        <Feather
                            name="search"
                            size={30}
                            color="black"
                            style={{ marginRight: width * 5 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.TopBtn}
                        onPress={() => {
                            navigation.navigate('RecipeAddScreen');
                        }}
                    >
                        <Feather
                            name="plus"
                            size={30}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: height * 4, flex: 1 }}>
                <FlatList
                    data={RecipeData.filter((value) => value.type == TypeName)}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => {
                        return item.title.includes(search) ||
                            item.material.includes(search) ||
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
                                            <Text style={styles.recipeTitleTextFont}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.materialTextFont}>
                                                {item.material.toString().replace(/\,/gi, ' ')}
                                            </Text>
                                            <View style={{ flexDirection: 'row' }}>
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
                                            <View style={{alignItems:'center', justifyContent:'flex-end', flexDirection: 'row'}}>
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
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        marginBottom: height * 20,
        marginLeft: width * 20,
        marginRight: width * 20,
    },

    searchFrame: {
        height: height * 40, //높이
        width: width * 360, //너비
        flexDirection: 'row', //정렬방향
        alignItems: 'center', //가로정렬
        justifyContent: 'space-between', //세로정렬
        paddingTop: height * 4,
        paddingBottom: height * 4,
        paddingRight: width * 20,
        paddingLeft: width * 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },
    TopBtn: {
        alignItems: 'center', //가로정렬
        justifyContent: 'center', //세로정렬
        marginRight: width * 2,
        marginLeft: width * 2,
    },
    recipeList: {
        paddingTop: height * 6,
        paddingBottom: height * 6,
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
    },
    recipeListFrame: {
        flexDirection: 'row',
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

    TypeNameFont: {
        fontSize: height * 20,
        fontFamily: 'PretendardSemiBold'
    },
    recipeTitleTextFont: {
        fontSize: height * 20,
        height: height * 24,
        marginBottom: height * 2,
        fontFamily: 'PretendardSemiBold',
    },
    materialTextFont: {
        fontSize: height * 12,
        height: height * 16,
        marginBottom: height * 2, 
        fontFamily: 'PretendardRegular'
    },
    recipeTextFont: {
        fontSize: height * 12,
        height: height * 16,
        marginBottom: height * 2, 
        fontFamily: 'PretendardRegular'
    },
});

export default RecipeListScreen;
