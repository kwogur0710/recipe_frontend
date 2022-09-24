import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { height, marginWidth, width } from '../../config/globalStyles';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
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
import { Feather } from '@expo/vector-icons';
import { RecipeList } from '../components/RecipeListComponents/RecipeList';
import { TopBar } from '../components/MainComponents/MainComponents';
import { RecipeData, search } from '../../config/RecipeData';

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const RecipeListScreen = ({ route, props, navigation }) => {
    const TypeName = route.params?.type;
    const [RecipeID, setRecipeID] = useState(['']);

    const [ingredient, setingredient] = useState(route.params?.ingredient);

    const [search, setSearch] = useState('');
    const onUpdateSearch = (text) => {
        setSearch(text);
    };

    useEffect(() => {
        setingredient(route.params?.ingredient);
        setRecipeID(['']);
    }, [route.params?.ingredient]);

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
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
        if (ingredient) {
            let a = 'false';
            item.material.forEach((element) => {
                if (a === 'false') {
                    if (ingredient.includes(element)) {
                        a = 'true';
                    }
                }
            });
            return a;
        } else {
            return false;
        }
    };
    console.log('id', RecipeID);
    console.log('RecipeListScreen', TypeName, ingredient);

    return (
        <SafeAreaView style={styles.container}>
            <TopBar
                screen="RecipeList"
                title={TypeName}
                navigation={navigation}
                ingredient={ingredient}
                setSearch={setSearch}
                onUpdateSearch={onUpdateSearch}
                search={true}
                add={true}
                filter={true}

            />
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
                        return (!(search && search.length > 0) && !ingredient) ||
                            (!search && IngredientFilter(item) === 'true') ||
                            (!(ingredient /*.length > 0*/) && SearchFilter(item) === 'true') ||
                            (IngredientFilter(item) === 'true' && SearchFilter(item) === 'true') ? (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('RecipeBoardScreen', {
                                        item: item,
                                    })
                                }
                            >
                                <RecipeList img={item.img} title={item.title} item={item} />
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
        paddingLeft: width * 20,
        paddingRight: width * 20,
        backgroundColor: '#FFFFFF',
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
