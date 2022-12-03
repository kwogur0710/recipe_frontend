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
    const user = route.params?.user;
    const [ingredient, setingredient] = useState(route.params?.ingredient);

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
                    navigation.navigate(
                        'RecipeBoardScreen',
                        {
                            item: item[0], user : user
                        }
                    );
                }}
                style={{
                    alignItems: 'center', //가로정렬 : 중앙
                    justifyContent: 'center',
                    flexDirection: 'row',
                    width: '100%',
                }}
            >
                <View style={styles.weekRecipe}>
                    <ImageBackground
                        style={{
                            width: width * 358,
                            height: height * 180,
                            marginTop: height * 2,
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                        }}
                        imageStyle={{ width: width * 360, height: height * 180 }}
                        source={{ uri: item[0].ATT_FILE_NO_MAIN }}
                    >
                        <Text
                            style={{
                                fontSize: height * 18,
                                paddingLeft: width * 4,
                                paddingRight: width * 4,
                                fontFamily: 'PretendardVariable',
                                backgroundColor: 'rgba(255, 255, 255,0.8)',
                            }}
                        >
                            {item[0].RCP_NM}
                        </Text>
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
                            width: width * 150,
                            height: height * 40,
                            borderRadius: 10,
                            borderColor: '#333333',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: height * 4,
                            borderWidth: 1,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: height * 14,
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
    return (
        <SafeAreaView style={styles.container}>
            <TopBar screen="Main" title="재료로 찾는 레시피" user={user} />
            <ScrollView style={{ width: width * 360 }}>
                <Swiper
                    containerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: width * 360,
                        maxHeight: height * 200,
                    }}
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    autoplay={true}
                    autoplayTimeout={5}
                >
                    <RecipeWeek
                        item={RecipeData.filter((value) => value.RCP_NM === '초계탕과 사색곤약')}
                    />
                    <RecipeWeek
                        item={RecipeData.filter((value) => value.RCP_NM === '우렁된장소스 배추롤')}
                    />
                    <RecipeWeek
                        item={RecipeData.filter((value) => value.RCP_NM === '인삼떡갈비')}
                    />
                </Swiper>
                <TouchableOpacity
                    style={{
                        width: width * 360,
                        height: height * 40,
                        borderWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => {
                        navigation.navigate('RecipeIngredientsScreen', {
                            ingredient: ingredient,
                            TypeName: '전체',
                            Type: 'RCP_PAT2',
                            RecipeData: RecipeData,
                            screen: 'recipeListScreen',
                        });
                    }}
                >
                    <Text
                        style={{
                            fontSize: height * 14,
                            fontFamily: 'PretendardSemiBold',
                        }}
                    >
                        재료로 레시피 검색하기
                    </Text>
                </TouchableOpacity>
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
                    </View>
                    <View style={styles.recipeTypeButtonwidthFrame}>
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
                    </View>
                    <View style={styles.recipeTypeButtonwidthFrame}>
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
                    <View style={styles.recipeTypeButtonwidthFrame}>
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
                    </View>
                    <View style={styles.recipeTypeButtonwidthFrame}>
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
                    </View>
                    <View style={styles.recipeTypeButtonwidthFrame}>
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
            </ScrollView>
        </SafeAreaView>
    );
};

export default MainScreen;
