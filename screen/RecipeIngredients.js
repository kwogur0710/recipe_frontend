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
    ListView,
} from 'react-native';
import { SearchBar, Button, ThemeProvider, ListItem, Icon, CheckBox } from '@rneui/themed';
import { height, marginWidth, width } from '../config/globalStyles';

const RecipeIngredients = () => {
    const SectionListView = 'true';
    const [search, setSearch] = useState('');
    const IngredientsData = [
        {
            title: '기본 양념',
            data: [
                '식용유',
                '소금',
                '설탕',
                '후추',
                '참기름',
                '들기름',
                '식초',
                '맛술',
                '다진파',
                '다진마늘',
                '고춧가루',
                '깨소금',
                '건다시마',
                '진간장',
                '국간장',
                '된장',
                '고추장',
                '액젓',
                '새우젓',
                '꿀',
                '물엿',
                '올리브유',
                '올리고당',
                '검은께',
                '생강가루',
                '들깨가루',
                '겨자가루',
                '와사비가루',
                '감자전분',
                '파마산치즈가루',
            ],
            select: [
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
                'false',
            ],
        },
        {
            title: '육류',
            data: ['돼지고기', '소고기', '닭고기', '양고기', '오리고기'],
        },
        {
            title: '채소',
            data: [
                '콩나물',
                '당근',
                '오이',
                '상추',
                '깻잎',
                '피망',
                '양파',
                '대파',
                '토마토',
                '마늘',
                '고추',
                '가지',
                '배',
                '수박',
                '감',
                '딸기',
                '레몬',
                '브롤콜리',
                '고구마',
                '감자',
            ],
        },
    ];

    const onUpdateSearch = (text) => {
        setSearch(text);
    };
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <SearchBar
                    theme="white"
                    platform="default"
                    placeholder={'재료를 입력'}
                    containerStyle={styles.searchBarContainer}
                    onChangeText={onUpdateSearch}
                    value={search}
                />
            </View>


            <SectionList
                sections={IngredientsData}
                renderSectionHeader={({ section }) => (
                    <TouchableOpacity>
                        <Text style={styles.sectionHeader}>{section.title}</Text>
                    </TouchableOpacity>
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity  onPress={() => setCheck1(!check1)}>
                        <Text style={styles.item}>{item} </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        paddingTop: height * 4,
        borderWidth: 1,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
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
});

export default RecipeIngredients;
