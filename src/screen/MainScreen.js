import React, { useState, useEffect, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
    Linking,
} from 'react-native';
import { height, width, marginWidth } from '../../config/globalStyles';
import { RecipeTypeName } from './RecipeListScreen';
import { Feather } from '@expo/vector-icons';
import styles from '../components/MainComponents/styles';
import { useNavigation } from '@react-navigation/native';
import { RecipeData } from '../../config/RecipeData';

const MainScreen = () => {
    const navigation = useNavigation();
    
    const RecipeType = ({ TypeImage, TypeName }) => {
        return (
            <View style={styles.recipeTypeButtonFrame}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RecipeListScreen', { type: TypeName })}
                >
                    <View style={styles.recipeTypeButtonImage}>
                        <Image source={TypeImage} style={{ width: 70, height: 70 }} />
                    </View>
                    <View style={styles.recipeTypeButtonText}>
                        <Text style={{ fontSize: 20, fontFamily: 'PretendardVariable' }}>
                            {TypeName}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
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
                    <TouchableOpacity style={styles.TopBtn} onPress={() => {navigation.navigate('SearchScreen')}}>
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
                <View style={styles.weekRecipeText}>
                    <Text style={{ fontSize: 30, fontFamily: 'PretendardSemiBold'}}>
                        금주의 레시피
                    </Text>
                </View>
                <ScrollView horizontal={true} style={{height:130}}>
                    <View style={styles.weekRecipeImageBlank} />
                    <View style={styles.weekRecipeImage}>
                    <Recipetitle
                        titleName="김치찌개"
                    />
                    <Image
                        style={{height: 130,width: 280,resizeMode: 'stretch',borderRadius: 10,marginTop: 1,}}
                        source={require('../../image/korean_food/image_2.jpeg')}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginTop:7,fontSize: 17}}>백종원의 돼지고기 김치찌개 </Text>
                        </View>
                    </View>
                    <View style={styles.weekRecipeImageBlank} />
                    <View style={styles.weekRecipeImage}>
                    <Image
                        style={{height: 130,width: 280,resizeMode: 'stretch',borderRadius: 10,marginTop: 1,}}
                        source={require('../../image/japanese_food/donkoturamen.jpg')}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginTop:7,fontSize: 17}}>구수하고 진한 그 맛~!돈코츠라멘 만들기</Text>
                        </View>
                    </View>
                    <View style={styles.weekRecipeImageBlank} />
                    <View style={styles.weekRecipeImage}>
                    <Image
                        style={{height: 130,width: 280,resizeMode: 'stretch',borderRadius: 10,marginTop: 1,}}
                        source={require('../../image/chinese_food/jajang.jpg')}/>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginTop:7,fontSize: 17}}>고든램지도 인정한 그맛 짜장면 만들기</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            
            <View style={styles.recipeTypeFrame}>
                <View style={styles.recipeTypeText}>
                    <Text style={{ fontSize: 30, fontFamily: 'PretendardSemiBold' }}>
                        레시피 종류
                    </Text>
                </View>
                <View style={styles.recipeTypeButtonwidthFrame}>
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

            <View style={styles.recipeVideoFrame}>
                <View style={styles.recipeVideoText}>
                    <Text style={{ fontSize: 30, fontFamily: 'PretendardSemiBold' }}>
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
                                fontSize: 20,
                                marginLeft: 2,
                                fontFamily: 'PretendardVariable',
                            }}
                        >
                            🔥700만이 뽑은 초간단 인생 요리 15가지🔥[만개의레시피]
                        </Text>
                    </View>

                    <View style={styles.recipeVideoYoutubeBlank2}></View>

                    <View style={styles.recipeVideoYoutube}>
                        <TouchableOpacity
                            onPress={() =>
                                Linking.openURL('https://www.youtube.com/watch?v=tqejXJK2LXQ')
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
                                source={require('../../image/youtube2.png')}
                            />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 20, marginLeft: '1%' }}>
                            [깐풍두부] 가성비 끝판왕 두부요리🥇
                        </Text>
                    </View>

                    <View style={styles.recipeVideoYoutubeBlank2}></View>

                    <View style={styles.recipeVideoYoutube}>
                        <TouchableOpacity
                            onPress={() =>
                                Linking.openURL('https://www.youtube.com/watch?v=dhCYZQUHxGU')
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
                                source={require('../../image/youtube3.png')}
                            />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 20, marginLeft: '1%' }}>
                            ★ 뚝딱뚝딱 84가지 초간단 레시피 [만개의레시피]
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default MainScreen;
