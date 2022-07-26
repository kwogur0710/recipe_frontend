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
    RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RecipeData } from '../../config/RecipeData';
import { Feather } from '@expo/vector-icons';

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const RecipeListScreen = ({ route }) => {
    const navigation = useNavigation();

    const TypeName = route.params?.type;
    const [RecipeID, setRecipeID] = useState(['']);
    const [ingredient, setingredient] = useState(route.params?.ingredient);

    useEffect(() => {
        setingredient(route.params?.ingredient);
        setRecipeID(['']);
    }, [route.params?.ingredient]);

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const RecipeFilter = (item) => {
        let a = 'false';
        item.material.forEach((element) => {
            if (a === 'false') {
                if (ingredient.includes(element)) {
                    a = 'true';
                    RecipeID.push(item.id);
                }
            }
        });
        return a;
    };
    console.log('id', RecipeID);
    console.log('RecipeListScreen', TypeName, ingredient);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.TopBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.TopBtn}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Feather name="chevron-left" size={26} color="black" />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: height * 20,
                            fontFamily: 'PretendardBold',
                            color: '#222222',
                            marginLeft: width * 4,
                        }}
                    >
                        {TypeName}
                    </Text>
                    <View style={styles.TopBtn} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('RecipeAddScreen');
                        }}
                        style={styles.TopBtn}
                    >
                        <Feather name="plus" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SearchScreen');
                        }}
                        style={styles.TopBtn}
                    >
                        <Feather name="search" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.TopBtn}
                        onPress={() => {
                            navigation.navigate('RecipeIngredientsScreen', {
                                ingredient: ingredient,
                                type: TypeName,
                                screen: 'recipeListScreen',
                            });
                        }}
                    >
                        <Feather name="filter" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: height * 4, flex: 1 }}>
                <FlatList
                    data={
                        TypeName != '전체'
                            ? RecipeData.filter((value) => value.type == TypeName)
                            : RecipeData
                    }
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => {
                        return !(ingredient && ingredient.length > 0) ||
                            RecipeFilter(item) === 'true' ? (
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
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        marginLeft: width * 20,
        marginRight: width * 20,
    },

    TopBar: {
        height: height * 40, //높이
        width: width * 360, //너비
        flexDirection: 'row', //정렬방향
        alignItems: 'center', //가로정렬
        justifyContent: 'space-between', //세로정렬
        paddingTop: height * 4,
        paddingBottom: height * 4,
        paddingRight: width * 20,
        paddingLeft: width * 20,
        borderColor: 'gray',
    },
    TopBtn: {
        justifyContent: 'center',
        padding: 4,
    },
    recipeList: {
        marginBottom: height * 4,
        marginTop: height * 4,
        borderRadius: 10,
        borderColor: 'gray',
        backgroundColor: '#ffffff',
        shadowColor: '#999999',
        shadowRadius: 2,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.3,
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
        paddingLeft: width * 4,
        paddingRight: width * 4,
        paddingTop: height * 2,
        width: width * 214,
        height: height * 80,
    },

    TitleFont: {
        fontSize: height * 20,
        fontFamily: 'PretendardBold',
    },
    recipeTitleTextFont: {
        fontSize: height * 18,
        marginBottom: height * 2,
        fontFamily: 'PretendardSemiBold',
    },
    materialTextFont: {
        fontSize: height * 14,
        height: height * 18,
        marginBottom: height * 2,
        fontFamily: 'PretendardRegular',
    },
    recipeTextFont: {
        fontSize: height * 12,
        marginBottom: height * 2,
        fontFamily: 'PretendardRegular',
    },
});

export default RecipeListScreen;
