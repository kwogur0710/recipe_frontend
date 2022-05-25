import React, { useState, useEffect, useRef } from 'react';
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
} from 'react-native';
import { height, width, marginWidth } from '../../config/globalStyles';
import { RecipeTypeName } from './RecipeListScreen';
import { Feather } from '@expo/vector-icons';
import styles from '../components/MainComponents/styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { RecipeData } from '../../config/RecipeData';
import { Timer, Time } from '../components/MainComponents/Timer';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const MainScreen = ({ name }) => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const weekTitle = ['김치찌개', '돈코츠 라멘', '짜장면'];
    const [num, setNum] = useState(0);
    useEffect(() => {
        if (!isFocused) return undefined;
        const timer = setTimeout(() => {
            console.log("금주의 레시피 순서 : ",num);
            num < 2 ? setNum((previousNum) => previousNum + 1) : setNum(0);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    });

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
                            borderRadius: 16,
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
                        imageStyle={{borderRadius: 16}}
                        source={item[0].img}
                    >
                        <View
                            style={{
                                borderRadius: 16,
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
            <View style={styles.recipeTypeButtonFrame}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('RecipeListScreen', { type: TypeName });
                    }}
                >
                    <View style={styles.recipeTypeButtonImage}>
                        <Image source={TypeImage} style={{ width: 70, height: 70 }} />
                    </View>
                    <View style={styles.recipeTypeButtonText}>
                        <Text style={{ fontSize: height * 20, fontFamily: 'PretendardVariable' }}>
                            {TypeName}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.searchFrame}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SettingScreen');
                        }}
                        style={{ width: width * 70 }}
                    >
                        <Feather name="menu" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: height * 20, fontFamily: 'PretendardBold' }}>
                        재료로 찾는 레시피
                    </Text>
                    <View style={{ flexDirection: 'row', width: width * 70 }}>
                        <TouchableOpacity
                            style={styles.TopBtn}
                            onPress={() => {
                                navigation.navigate('SearchScreen');
                            }}
                        >
                            <Feather
                                name="search"
                                size={30}
                                color="black"
                                style={{ marginRight: width * 5 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.TopBtn}
                            onPress={() => {
                                navigation.navigate('RecipeAddScreen');
                            }}
                        >
                            <Feather name="plus" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.weekRecipeFrame}>
                    <Text
                        style={{
                            fontSize: 30,
                            fontFamily: 'PretendardSemiBold',
                            width: '100%',
                        }}
                    >
                        금주의 레시피
                    </Text>
                    <RecipeWeek
                        item={RecipeData.filter((value) => value.title === weekTitle[num])}
                    />
                </View>
            <View style={styles.recipeVideoFrame}>
                <View style={styles.recipeVideoText}>
                    <Text style={{ fontSize: height*20, fontFamily: 'PretendardSemiBold' }}>
                        오늘은 이거다!
                    </Text>
                </View>

                <View style={styles.recipeVideoYoutubeBlank}></View>

                <ScrollView horizontal={true}>
                    <View style={styles.recipeVideoYoutube}>
                        <TouchableOpacity
                            onPress={() =>
                                Linking.openURL('https://www.youtube.com/watch?v=vz6Hpuss1Lc')
                            }
                        >
                            <Image
                                style={{
                                    height: height * 140,
                                    width: width * 250,
                                    marginLeft: '1%',
                                    marginTop: -5,
                                    resizeMode: 'contain',
                                    borderRadius: 5,
                                }}
                                source={require('../../image/youtube1.png')}
                            />
                        </TouchableOpacity>

                        <Text
                            style={{
                                fontSize:  height*15,
                                marginLeft: 10,
                                fontFamily: 'PretendardVariable',
                            }}
                        >
                            🔥700만이 뽑은 초간단 인생 요리 15가지🔥[만개의레시피]
                        </Text>
                    </View>

                    <View style={styles.recipeVideoYoutubeBlank}></View>

                    <ScrollView horizontal={true}>
                        <View style={styles.recipeVideoYoutube}>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=vz6Hpuss1Lc');
                                }}
                            >
                                <Image
                                    style={{
                                        height: height * 140,
                                        width: width * 250,
                                        marginLeft: '1%',
                                        marginTop: -5,
                                        resizeMode: 'contain',
                                        borderRadius: 5,
                                    }}
                                    source={require('../../image/youtube1.png')}
                                />
                            </TouchableOpacity>

                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 2,
                                    fontFamily: 'PretendardVariable',
                                }}
                            >
                                🔥700만이 뽑은 초간단 인생 요리 15가지🔥[만개의레시피]
                            </Text>
                        </View>
                        <Text style={{ fontSize: height*15, marginLeft: 10 ,fontFamily: 'PretendardVariable',}}>
                            [깐풍두부] 가성비 끝판왕 두부요리🥇
                        </Text>
                    </View>


                        <View style={styles.recipeVideoYoutube}>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=tqejXJK2LXQ');
                                }}
                            >
                                <Image
                                    style={{
                                        height: height * 140,
                                        width: width * 250,
                                        marginLeft: '1%',
                                        marginTop: -5,
                                        resizeMode: 'contain',
                                        borderRadius: 5,
                                    }}
                                    source={require('../../image/youtube2.png')}
                                />
                            </TouchableOpacity>

                            <Text style={{ fontSize: 20, marginLeft: width*2,
                                    fontFamily: 'PretendardVariable', }}>
                                [깐풍두부] 가성비 끝판왕 두부요리🥇
                            </Text>
                        </View>

                        <View style={styles.recipeVideoYoutubeBlank2}></View>

                        <View style={styles.recipeVideoYoutube}>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=dhCYZQUHxGU');
                                }}
                            >
                                <Image
                                    style={{
                                        height: height * 140,
                                        width: width * 250,
                                        marginLeft: '1%',
                                        marginTop: -5,
                                        resizeMode: 'contain',
                                        borderRadius: 5,
                                    }}
                                    source={require('../../image/youtube3.png')}
                                />
                            </TouchableOpacity>
                        <Text style={{ fontSize:  height*15, marginLeft: 10, fontFamily: 'PretendardVariable', }}>
                            ★ 뚝딱뚝딱 84가지 초간단 레시피 [만개의레시피]
                        </Text>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default MainScreen;
