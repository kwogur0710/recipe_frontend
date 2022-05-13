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
import { height, marginWidth, width } from '../config/globalStyles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { IngredientsData} from '../config/RecipeData';

const RecipeIngredientsScreen = ({ route }) => {
    const navigation = useNavigation();
    const TypeName = route.params?.type;
    const [selectedTitle, setSelectedTitle] = useState([]);
    const [parts, setParts] = useState(route.params?.parts);
    const [search, setSearch] = useState('');
    const result = useState();
    const onUpdateSearch = (text) => {
        setSearch(text);
    };

    const SelectHandler = (name) => {
        let a = [];
        if (parts && parts.length > 0) {
            if (parts.some((value) => value === name)) {
                parts.forEach((value) => {
                    if (value !== name) {
                        a.push(value);
                    }
                });
            } else {
                a.push(...parts, name);
            }
        } else {
            a.push(name);
        }
        setParts(a);
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

    

    console.log(parts);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
                <TextInput
                    placeholder={'재료를 입력하세요'}
                    placeholderTextColor={'#D5D5D5'}
                    containerStyle={styles.searchBarContainer}
                    onChangeText={onUpdateSearch}
                    style={{ fontSize: 15, color: 'black' }}
                    value={search}
                />
                <TouchableOpacity
                    style={{ position: 'absolute', right: 0, top: 0, bottom: 0 }}
                    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
                >
                    <AntDesign name="search1" size={18} color="black" />
                </TouchableOpacity>
            </View>
            <SectionList
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
                    return item.includes(search) || search == '' ? (
                        //글자가 같고, null이 아닐때
                        selectedTitle.some((value) => value === section.title) ? null : (
                            <TouchableOpacity
                                onPress={() => {
                                    SelectHandler(item);
                                }}
                                style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                    paddingRight: 10,
                                }}
                            >
                                <Text style={styles.item}>{item}</Text>
                                {parts && parts.some((value) => value == item) ? (
                                    <AntDesign
                                        name="check"
                                        size={24}
                                        color="black"
                                        style={{ padding: 9 }}
                                    />
                                ) : null}
                            </TouchableOpacity>
                        )
                    ) : null;
                }}
            />
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('RecipeListScreen', { parts: parts, type: TypeName })
                }
            >
                <View style={styles.apply}>
                    <Text style={styles.applyFont}> 적용 </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    view: {
        margin: 10,
    },
    searchBarContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    IngredientsListView: {
        width: '100%',
        height: height * 40,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width * 10,
    },
    apply: {
        width: '100%',
        height: height * 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    applyFont: {
        fontSize: 20,
    },
});

export default RecipeIngredientsScreen;
