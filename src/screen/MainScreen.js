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
import { height, width, marginWidth } from '../../config/globalStyles';
import styles from '../components/MainComponents/styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { RecipeData } from '../../config/RecipeData';
import { Timer, Time } from '../components/MainComponents/Timer';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const MainScreen = ({ name }) => {
    const navigation = useNavigation();

    const isFocused = useIsFocused();
    const weekTitle = ['김치찌개', '돈코츠 라멘', '짜장면'];
    const [num, setNum] = useState(0);
    useEffect(() => {
        if (!isFocused) return undefined;
        const timer = setTimeout(() => {
            num < 2 ? setNum((previousNum) => previousNum + 1) : setNum(0);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    });

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
            >
                <View style={styles.weekRecipe}>
                    <ImageBackground
                        style={{
                            borderRadius: 10,
                            width: width * 320,
                            height: height * 200,
                            marginTop: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            shadowColor: '#000000',
                            shadowOffset: { height: height * 1, width: width * 0 },
                            shadowOpacity: 0.5,
                        }}
                        imageStyle={{ borderRadius: 10 }}
                        source={item[0].img}
                    >
                        <View
                            style={{
                                borderRadius: 10,
                                fontSize: height * 34,
                                width: '100%',
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
                                {item[0].title}
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        );
    };
    const RecipeType = ({ TypeImage, TypeName }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('RecipeListScreen', { type: TypeName });
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={TypeImage}
                            style={{ width: width * 54, height: width * 54 }}
                        />
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
                                color:'#222222'
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
                            height: height * 120,
                            width: width * 250,
                            marginLeft: width * 2,
                            borderRadius: 6,
                            borderWidth: 1,
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
            <View style={styles.searchFrame}>
                <Text style={{ fontSize: height * 20, fontFamily: 'PretendardBold', color:'#222222' }}>
                    재료로 찾는 레시피
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        width: width * 60,
                        justifyContent: 'space-between',
                    }}
                ></View>
            </View>
            <ScrollView
                style={{ width: '100%'}}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                <View style={{ height: height * 10 }} />
                <RecipeWeek item={RecipeData.filter((value) => value.title === weekTitle[num])} />
                <View style={{ height: height * 10 }} />
                <View style={styles.recipeTypeFrame}>
                    <Text
                        style={{
                            fontSize: height * 20,
                            fontFamily: 'PretendardSemiBold',
                            marginTop: height * 4,
                            marginBottom: height * 4,
                            color:'#222222'
                        }}
                    >
                        음식 종류
                    </Text>
                    <View style={styles.recipeTypeButtonwidthFrame}>
                        <RecipeType
                            TypeImage={require('../../image/icon/all_food.png')}
                            TypeName="전체"
                        />
                        <RecipeType
                            TypeImage={require('../../image/icon/korean_food.png')}
                            TypeName="한식"
                        />
                        <RecipeType
                            TypeImage={require('../../image/icon/japanese_food.png')}
                            TypeName="일식"
                        />
                        <RecipeType
                            TypeImage={require('../../image/icon/chinese_food.png')}
                            TypeName="중식"
                        />
                        <RecipeType
                            TypeImage={require('../../image/icon/western_food.png')}
                            TypeName="양식"
                        />
                    </View>
                </View>
                <View style={{ height: height * 10 }} />
                <View style={styles.recipeVideoFrame}>
                    <Text
                        style={{
                            fontSize: height * 20,
                            fontFamily: 'PretendardSemiBold',
                            marginTop: height * 4,
                            marginBottom: height * 4,
                            color:'#222222'
                        }}
                    >
                        오늘은 이거다!
                    </Text>

                    <ScrollView horizontal={true}>
                        <RecipeYoutube
                            image={require('../../image/youtube1.png')}
                            title="🔥 700만이 뽑은 초간단 인생 요리 15가지 🔥 "
                            link="https://www.youtube.com/watch?v=vz6Hpuss1Lc"
                        />
                        <RecipeYoutube
                            image={require('../../image/youtube2.png')}
                            title="[깐풍두부] 가성비 끝판왕 두부요리🥇"
                            link="https://www.youtube.com/watch?v=tqejXJK2LXQ"
                        />
                        <RecipeYoutube
                            image={require('../../image/youtube3.png')}
                            title="★ 뚝딱뚝딱 84가지 초간단 레시피 ★"
                            link="https://www.youtube.com/watch?v=dhCYZQUHxGU"
                        />
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MainScreen;
