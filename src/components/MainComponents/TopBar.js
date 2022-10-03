import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { height, marginWidth, width } from '../../../config/globalStyles';

export const TopBar = (props, { onUpdateSearch, setSearch }) => {
    const navigation = useNavigation();
    const ingredient = props?.ingredient;
    const TypeName = props.title;
    const Type = props.Type;
    const RecipeData = props.RecipeData;
    const [searchbool, setSearchBool] = useState(false);

    const [searchA, setSearchA] = useState('');

    const onUpdateSearchA = (text) => {
        setSearchA(text);
        props.onUpdateSearch(text);
        console.log('search', searchA);
    };

    return (
        <View style={styles.TopBar}>
            {props.screen == 'Main' ? (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SettingScreen');
                    }}
                    style={styles.TopBtn}
                >
                    <Feather name="menu" size={26} color="black" />
                </TouchableOpacity>
            ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {props.back == 'true' ? (
                        <TouchableOpacity
                            style={styles.TopBtn}
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <Feather name="chevron-left" size={26} color="black" />
                        </TouchableOpacity>
                    ) : null}
                    {searchbool == true ? (
                        <TextInput
                            placeholder={props.searchTitle}
                            placeholderTextColor={'#959595'}
                            containerStyle={styles.searchBarContainer}
                            onChangeText={onUpdateSearchA}
                            style={{
                                fontSize: 15,
                                fontFamily: 'PretendardSemiBold',
                                width: width * 190,
                            }}
                            value={searchA}
                        />
                    ) : (
                        <Text
                            style={{
                                fontSize: height * 20,
                                fontFamily: 'PretendardBold',
                                color: '#222222',
                                marginLeft: width * 4,
                            }}
                        >
                            {props.title}
                        </Text>
                    )}
                    <View style={styles.TopBtn} />
                </View>
            )}
            {props.screen == 'Main' ? (
                <Text
                    style={{
                        fontSize: height * 20,
                        fontFamily: 'PretendardBold',
                        color: '#222222',
                    }}
                >
                {props.title}
                </Text>
            ) : (
                <View style={{ flexDirection: 'row' }}>
                    {props.search == true ? (
                        <TouchableOpacity
                            onPress={() => {
                                setSearchBool(!searchbool), onUpdateSearchA();
                            }}
                            style={styles.TopBtn}
                        >
                            {searchbool == true ? (
                                <Feather name="x" size={26} color="black" />
                            ) : (
                                <Feather name="search" size={26} color="black" />
                            )}
                        </TouchableOpacity>
                    ) : null}
                    {props.add == true ? (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('RecipeAddScreen');
                            }}
                            style={styles.TopBtn}
                        >
                            <Feather name="plus" size={26} color="black" />
                        </TouchableOpacity>
                    ) : null}
                    {props.filter == true ? (
                        <TouchableOpacity
                            style={styles.TopBtn}
                            onPress={() => {
                                navigation.navigate('RecipeIngredientsScreen', {
                                    ingredient: ingredient,
                                    TypeName: TypeName,
                                    Type: Type,
                                    RecipeData: RecipeData,
                                    screen: 'recipeListScreen',
                                });
                            }}
                        >
                            <Feather name="filter" size={26} color="black" />
                        </TouchableOpacity>
                    ) : null}
                </View>
            )}
            {props.screen == 'Main' ? <View style={styles.TopBtn} /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
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
        padding: 2,
        width: width * 30, //너비
    },
    searchBarContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
});
