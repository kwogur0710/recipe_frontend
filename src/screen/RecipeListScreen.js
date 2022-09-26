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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { RecipeList } from '../components/RecipeListComponents/RecipeList';
import { TopBar } from '../components/MainComponents/TopBar';
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
                searchTitle={'레시피 제목을 입력하세요'}
            />
            <FlatList
                data={
                    TypeName != '전체'
                        ? RecipeData.filter((value) => value.type == TypeName)
                        : RecipeData
                }
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        paddingLeft: width *10,
        paddingRight: width * 10,
        backgroundColor: '#FFFFFF',
    },
});

export default RecipeListScreen;
