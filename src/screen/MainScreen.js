import React, { useState, useEffect, useRef, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
    Linking,
    ImageBackground,
    Animated,
    RefreshControl,
} from 'react-native';
import Swiper, { SwiperSlide } from 'react-native-swiper';
import { height, width, marginWidth } from '../../config/globalStyles';
import styles from '../components/MainComponents/styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { TopBar } from '../components/MainComponents/TopBar';
import axios from 'axios';

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MainScreen = ({ navigation, route }) => {
    const RecipeData = route.params?.RecipeData;
    
    const isFocused = useIsFocused();

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => {
            setRefreshing(false);
        });
    }, []);

    const RecipeWeek = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('RecipeBoardScreen', {
                        item: item[0],
                    });
                }}
                style={{
                    alignItems: 'center', //가로정렬 : 중앙
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: width * 360,
                }}
            >
                <View style={styles.weekRecipe}>
                    <ImageBackground
                        style={{
                            width: width * 310,
                            height: height * 200,
                            marginTop: height * 2,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                        imageStyle={{ borderRadius: 10, width: width * 310, height: height * 200 }}
                        source={{ uri: item[0].ATT_FILE_NO_MAIN }}
                    >
                        <View
                            style={{
                                borderRadius: 10,
                                width: '100%',
                                fontSize: height * 34,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'rgba(255, 255, 255,0.8)',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: height * 24,
                                    fontFamily: 'PretendardVariable',
                                }}
                            >
                                {item[0].RCP_NM}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
    };
    const RecipeType = ({ TypeImage, TypeName, Type }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('RecipeListScreen', {
                            TypeName: TypeName,
                            RecipeData: RecipeData,
                            Type: Type,
                        });
                    }}
                >
                    <View
                        style={{
                            width: width * 54,
                            height: width * 54,
                            borderRadius: 100,
                            borderColor: '#333333',
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: height * 4,
                            borderWidth: 1,
                        }}
                    >
                        {TypeName === '전체' ? (
                            <Text
                                style={{
                                    fontSize: height * 18,
                                    fontFamily: 'PretendardSemiBold',
                                    color: '#222222',
                                }}
                            >
                                ALL
                            </Text>
                        ) : (
                            <Image
                                source={TypeImage}
                                style={{ width: width * 36, height: width * 36 }}
                            />
                        )}
                    </View>
                    <View
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                marginTop: height * 2,
                                fontSize: height * 12,
                                fontFamily: 'PretendardSemiBold',
                                color: '#222222',
                            }}
                        >
                            {TypeName}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    const RecipeYoutube = ({ image, title, link }) => {
        return (
            <View style={styles.recipeVideoYoutube}>
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL(link);
                    }}
                >
                    <Image
                        style={{
                            height: width * 140,
                            width: width * 250,
                            marginLeft: width * 2,
                            borderRadius: 6,
                        }}
                        source={image}
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        fontSize: height * 12,
                        marginLeft: width * 2,
                        fontFamily: 'PretendardVariable',
                        width: width * 250,
                    }}
                >
                    {title}
                </Text>
            </View>
        );
    };
     return (
        <SafeAreaView style={styles.container}>
            <TopBar screen="Main" title="재료로 찾는 레시피" />
            <Swiper
                containerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: width * 360,
                    maxHeight: height * 240,
                }}
                showsButtons={true}
                autoplay={true}
                autoplayTimeout={5}
            >
                <RecipeWeek item={RecipeData.filter((value) => value.RCP_NM === '코다리맑은찜')} />
                <RecipeWeek
                    item={RecipeData.filter((value) => value.RCP_NM === '우렁된장소스 배추롤')}
                />
                <RecipeWeek item={RecipeData.filter((value) => value.RCP_NM === '인삼떡갈비')} />
            </Swiper>
            <View style={styles.recipeTypeFrame}>
                <View style={styles.recipeTypeButtonwidthFrame}>
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_WAY2"
                        TypeName="전체"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_WAY2"
                        TypeName="찌기"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_WAY2"
                        TypeName="끓이기"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_WAY2"
                        TypeName="굽기"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_WAY2"
                        TypeName="볶기"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_WAY2"
                        TypeName="튀기기"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_WAY2"
                        TypeName="기타"
                    />
                </View>
            </View>
            <View style={styles.recipeTypeFrame}>
                <View style={styles.recipeTypeButtonwidthFrame}>
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_PAT2"
                        TypeName="전체"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_PAT2"
                        TypeName="밥"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_PAT2"
                        TypeName="일품"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_PAT2"
                        TypeName="국&찌개"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_PAT2"
                        TypeName="반찬"
                    />
                    <RecipeType
                        TypeImage={require('../../image/icon/all_food.png')}
                        Type="RCP_PAT2"
                        TypeName="후식"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MainScreen;
