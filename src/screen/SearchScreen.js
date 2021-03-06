import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { height, marginWidth, width } from '../../config/globalStyles';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RecipeData } from '../../config/RecipeData';
import { Feather } from '@expo/vector-icons';

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};
const SearchScreen = ({ route }) => {
    console.log('ingredient', ingredient);
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);
    const [ingredient, setingredient] = useState(route.params?.ingredient);
    useEffect(() => {
        setingredient(route.params?.ingredient);
    }, [route.params?.ingredient]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const [search, setSearch] = useState('');
    const onUpdateSearch = (text) => {
        setSearch(text);
        console.log('search', search);
    };

    const SearchFilter = (item) => {
        let a = 'false';
        if (a === 'false') {
            if (item.title.includes(search)) {
                a = 'true';
            }
        }
        return a;
    };
    const IngredientFilter = (item) => {
        let a = 'false';
        item.material.forEach((element) => {
            if (a === 'false') {
                if (ingredient.includes(element)) {
                    a = 'true';
                }
            }
        });
        return a;
    };

    console.log(ingredient);
    console.log(search);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchFrame}>
                <Feather name="search" size={26} color="black" style={{ marginRight: width * 5 }} />
                <TextInput
                    placeholder={'????????? ????????? ???????????????'}
                    placeholderTextColor={'#959595'}
                    containerStyle={styles.searchBarContainer}
                    onChangeText={onUpdateSearch}
                    style={{
                        fontSize: 15,
                        fontFamily: 'PretendardSemiBold',
                        width: width * 230,
                    }}
                    value={search}
                />
                <TouchableOpacity
                    style={styles.TopBtn}
                    onPress={() => {
                        navigation.navigate('RecipeIngredientsScreen', {
                            ingredient: ingredient,
                            screen: 'searchScreen',
                        });
                    }}
                >
                    <Feather
                        name="filter"
                        size={26}
                        color="black"
                    />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: height * 4, flex: 1 }}>
                <FlatList
                    data={RecipeData}
                    keyExtractor={(item) => String(item.id)}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    renderItem={({ item }) => {
                        return (!(search && search.length > 0) && !ingredient) ||
                            (!search && IngredientFilter(item) === 'true') ||
                            (!ingredient.length > 0 && SearchFilter(item) === 'true') ||
                            (IngredientFilter(item) === 'true' && SearchFilter(item) === 'true') ? (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('RecipeBoardScreen', {
                                        item: item,
                                    })
                                }
                            >
                                <View style={styles.recipeList}>
                                    <View style={styles.recipeListFrame}>
                                        <Image source={item.img} style={styles.recipeListImg} />
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
                                                        ?????? : {item.time}???
                                                    </Text>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.recipeTextFont}>
                                                        ????????? : {item.difficulty}
                                                    </Text>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={styles.recipeTextFont}>
                                                        ?????? : {item.serving}??????
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
    searchFrame: {
        height: height * 40, //??????
        width: width * 320, //??????
        flexDirection: 'row', //????????????
        alignItems: 'center', //????????????
        justifyContent: 'center', //????????????
        paddingTop: height * 4,
        paddingBottom: height * 4,
        paddingRight: width * 10,
        paddingLeft: width * 10,
        backgroundColor: '#e8e8e8',
        borderRadius: 16,
    },

    TopBtn: {
        alignItems: 'center', //????????????
        justifyContent: 'center', //????????????
        marginRight: width * 2,
        marginLeft: width * 2,
    },
    TypeNameFont: {
        fontSize: height * 20,
        fontFamily: 'PretendardBold',
    },
    searchBarContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
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

export default SearchScreen;
