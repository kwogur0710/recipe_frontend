import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Touchable,
    TouchableOpacity,
    FlatList,
    SectionList,
    SafeAreaView,
    Platform,
} from 'react-native';
import { height, marginWidth, width } from '../../config/globalStyles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { IngredientsData } from '../../config/RecipeData';
import { TopBar } from '../components/MainComponents/TopBar';

const RecipeIngredientsScreen = ({ route }) => {
    const navigation = useNavigation();
    const backScreen = route.params?.screen;
    const TypeName = route.params?.type;
    const [selectedTitle, setSelectedTitle] = useState([]);
    const [ingredient, setingredient] = useState(route.params?.ingredient);
    const [search, setSearch] = useState('');
    const result = useState();
    const onUpdateSearch = (text) => {
        setSearch(text);
    };

    const SelectHandler = (name) => {
        let a = [];
        if (ingredient && ingredient.length > 0) {
            if (ingredient.some((value) => value === name)) {
                ingredient.forEach((value) => {
                    if (value !== name) {
                        a.push(value);
                    }
                });
            } else {
                a.push(...ingredient, name);
            }
        } else {
            a.push(name);
        }
        setingredient(a);
    };

    const SelectTitleHandler = (title) => {
        let a = [];
        if (selectedTitle && selectedTitle.length > 0) {
            //조건문. 만약 배열에 값이 있고, 배열의 길이가 0 이상이면
            if (selectedTitle.some((value) => value === title)) {
                //조건문. 만약 클릭된게 배열에 있다면
                selectedTitle.forEach((value) => {
                    //반복문.
                    if (value !== title) {
                        //조건문. 만약 클릭된게 배열에 없다면
                        a.push(value);
                    }
                });
            } else {
                //원래있던 배열과 클린한 재료를 a배열에 추가
                a.push(...selectedTitle, title);
            } //클릭한 재료만 a배열에 추가
        } else {
            a.push(title);
        }
        setSelectedTitle(a);
    };
    return (
        <SafeAreaView style={styles.container}>
            <TopBar
                screen="RecipeIngredients"
                title="재료로 검색하기"
                search={true}
                setSearch={setSearch}
                onUpdateSearch={onUpdateSearch}
                searchTitle={'재료를 입력하세요'}
            />
            <SectionList
                style={{ width: '100%' }}
                sections={IngredientsData}
                keyExtractor={(item, index) => index}
                renderSectionHeader={({ section }) => (
                    <TouchableOpacity
                        onPress={() => {
                            SelectTitleHandler(section.title);
                        }}
                    >
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    </TouchableOpacity>
                )}
                renderItem={({ item, section }) => {
                    return !search || item.includes(search) ? (
                        //글자가 같고, null이 아닐때
                        selectedTitle.some((value) => value === section.title) ? null : (
                            <TouchableOpacity
                                onPress={() => {
                                    SelectHandler(item);
                                }}
                                style={styles.itemTextBox}
                            >
                                <Text style={styles.itemText}>{item}</Text>
                                {ingredient && ingredient.some((value) => value == item) ? (
                                    <Feather name="check" size={24} color="black" />
                                ) : null}
                            </TouchableOpacity>
                        )
                    ) : null;
                }}
            />
            <TouchableOpacity
                style={{ width: '100%', borderRadius: 10 }}
                onPress={() => {
                    backScreen == 'recipeListScreen'
                        ? navigation.navigate('RecipeListScreen', {
                              ingredient: ingredient,
                              type: TypeName,
                          })
                        : null;
                    backScreen == 'searchScreen'
                        ? navigation.navigate('SearchScreen', { ingredient: ingredient })
                        : null;
                }}
            >
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 6,
                    }}
                >
                    <View style={styles.apply}>
                        <Text style={styles.applyFont}> 적용 </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
    },
    searchFrame: {
        height: height * 40, //높이
        width: width * 320, //너비
        flexDirection: 'row', //정렬방향
        alignItems: 'center', //가로정렬
        justifyContent: 'center', //세로정렬
        paddingTop: height * 4,
        paddingBottom: height * 4,
        paddingRight: width * 10,
        paddingLeft: width * 10,
        marginBottom: height * 6,
        backgroundColor: '#e8e8e8',
        borderRadius: 16,
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
    TopBtn: {
        alignItems: 'center', //가로정렬
        justifyContent: 'center', //세로정렬
        marginRight: width * 2,
        marginLeft: width * 2,
    },

    sectionHeader: {
        paddingTop: height * 2,
        paddingBottom: height * 2,
        paddingLeft: width * 20,
        paddingRight: width * 20,
        fontSize: height * 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255,1)',
        fontFamily: 'PretendardSemiBold',
    },
    itemTextBox: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: height * 6,
        paddingBottom: height * 6,
        paddingLeft: width * 20,
        paddingRight: width * 20,
    },
    itemText: {
        fontSize: height * 16,
        fontFamily: 'PretendardRegular',
    },
    searchBarContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    apply: {
        width: width * 300,
        height: height * 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        backgroundColor: '#8721be',
        borderRadius: 10,
    },
    applyFont: {
        fontSize: 20,
        color: '#ffffff',
        fontFamily: 'PretendardSemiBold',
    },
});

export default RecipeIngredientsScreen;
