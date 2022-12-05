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
import { RecipeAPIList } from '../components/RecipeListComponents/RecipeAPIList';

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const RecipeListScreen = ({ route, props, navigation }) => {
    const RecipeData = route.params?.RecipeData;
    const Type = route.params?.Type;
    const TypeName = route.params?.TypeName;
    const user = route.params?.user;
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
    
    const SearchFilter = (item) => {
        let a = false;
        if (a === false) {
            if (item.RCP_NM.includes(search)) {
                a = true;
            }
        }
        return a;
    };
    const IngredientFilter = (item) => {
        let a = false;
        ingredient.some((element) => {
            if (a == false) {
                if (item.includes(element)) {
                    a = true;
                }
            }
        });
        return a;
    };
    return (
        <SafeAreaView style={styles.container}>
            <TopBar
                screen="RecipeList"
                title={TypeName}
                Type={Type}
                navigation={navigation}
                ingredient={ingredient}
                setSearch={setSearch}
                onUpdateSearch={onUpdateSearch}
                search={true}
                filter={true}
                searchTitle={'레시피 제목을 입력하세요'}
                RecipeData={RecipeData}
            />
            <FlatList
                data={
                    TypeName == '전체'
                        ? RecipeData
                        : Type == 'RCP_WAY2'
                        ? RecipeData.filter((value) => value.RCP_WAY2 == TypeName)
                        : Type == 'RCP_PAT2'
                        ? RecipeData.filter((value) => value.RCP_PAT2 == TypeName)
                        : null
                }
                windowSize={10}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                keyExtractor={(item) => String(item.RCP_SEQ)}
                renderItem={({ item }) => {
                    return (!(search && search.length > 0) &&
                        !(ingredient && ingredient.length > 0)) || //search랑 ingredient가 없을때
                        (!search && IngredientFilter(item.RCP_PARTS_DTLS) === true) || //search가 없고 IngredientFilter가 true일때
                        (!ingredient && SearchFilter(item) === true) || //ingredient가 없고 SearchFilter가 true일때
                        (IngredientFilter(item.RCP_PARTS_DTLS) === true && SearchFilter(item) === true) ? ( //IngredientFilter랑 SearchFilter가 true일때
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('RecipeBoardScreen', {
                                    item: item, user : user
                                })
                            }
                        >
                            <RecipeList img={item.img} title={item.title} item={item} />
                        </TouchableOpacity>
                    ) : null ;
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        paddingLeft: width * 10,
        paddingRight: width * 10,
        backgroundColor: '#FFFFFF',
    },
});

export default RecipeListScreen;
