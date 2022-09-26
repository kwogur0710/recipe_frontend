import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { height, marginWidth, width } from '../../config/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { RecipeData } from '../../config/RecipeData';
import { Feather } from '@expo/vector-icons';
import { TopBar } from '../components/MainComponents/TopBar';

const RecipeBoardScreen = ({ route, navigation }) => {
    const [Recipe, setRecipe] = useState(route.params?.item);
    useEffect(() => {
        setRecipe(route.params?.item), [route.params?.item];
        console.log('RecipeBoardScreen', Recipe.id, Recipe.title);
    });
    return (
        <SafeAreaView style={styles.container}>
            <TopBar screen="RecipeBoard" title={Recipe.title} />
            <ScrollView style={{ width: '100%' }}>
                <Image style={styles.img} resizeMode="cover" source={Recipe.img} />
                <View style={styles.RecipeTextView}>
                    <View style={styles.iconView}>
                        <View style={styles.iconBox}>
                            <Image
                                resizeMode="contain"
                                source={require('../../image/icon/time.png')}
                                style={styles.iconImage}
                            />
                            <Text style={styles.SubText}> {Recipe.time} 분</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Image
                                resizeMode="contain"
                                source={require('../../image/icon/difficulty.png')}
                                style={styles.iconImage}
                            />
                            <Text style={styles.SubText}> {Recipe.difficulty} 단계</Text>
                        </View>
                        <View style={styles.iconBox}>
                            <Image
                                resizeMode="contain"
                                source={require('../../image/icon/serving.png')}
                                style={styles.iconImage}
                            />
                            <Text style={styles.SubText}> {Recipe.serving} 인분</Text>
                        </View>
                    </View>
                    <View style={styles.border} />
                    <Text style={styles.SubTitleText}>재료</Text>
                    <Text style={styles.ContentText}>
                        {Recipe.amount.toString().replace(/\,/gi, '\n')}
                    </Text>
                    <View style={styles.border} />
                    <View>
                        <Text style={styles.SubTitleText}>조리 순서</Text>
                        <Text style={styles.ContentText}>{Recipe.detail}</Text>
                    </View>
                </View>
                <View style={{ paddingBottom: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        backgroundColor: '#FFFFFF',
    },
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
        width: width * 30,
        padding: 4,
    },
    img: {
        width: '100%',
        height: height * 280,
    },
    profileImgView: {
        width: '100%',
        height: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black', //그림자 색상
        shadowOpacity: 0.6, //그림자 투명도
        shadowOffset: { height: 4, width: 0 }, //그림자 위치
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    RecipeTextView: {
        paddingLeft: width * 10,
        paddingRight: width * 10,
        paddingTop: height * 6,
        marginBottom: height * 6,
        width: '100%',
    },
    iconView: {
        marginTop: height * 6,
        marginBottom: height * 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    iconBox: {
        flexDirection: 'row',
    },
    iconImage: {
        width: height * 20,
        height: height * 20,
    },
    border: {
        borderTopWidth: height * 2,
        borderColor: 'gray',
        marginTop: height * 6,
        marginBottom: height * 6,
        width: '100%',
    },
    TitleText: {
        fontSize: height * 24,
        marginTop: height * 4,
        marginBottom: height * 4,
        fontFamily: 'PretendardSemiBold',
        color: '#222222',
    },
    SubText: {
        fontSize: width * 16,
        margin: 2,
        fontFamily: 'PretendardMedium',
        color: '#333333',
    },
    SubTitleText: {
        fontSize: height * 16,
        margin: 2,
        fontFamily: 'PretendardMedium',
        color: '#333333',
    },
    ContentText: {
        fontSize: height * 14,
        paddingLeft: width * 10,
        marginBottom: height * 6,
        fontFamily: 'PretendardLight',
        color: '#666666',
    },
});

export default RecipeBoardScreen;
