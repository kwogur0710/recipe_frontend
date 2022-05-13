import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { height, marginWidth, width } from '../config/globalStyles';
import { useNavigation } from '@react-navigation/native';
import { RecipeData } from '../config/RecipeData';

const RecipeBoardScreen = ({ route }) => {
    const navigation = useNavigation();
    const [Recipe, setRecipe] = useState(route.params?.item);
    useEffect(() => {
        setRecipe(route.params?.item), [route.params?.item];
        console.log(Recipe);
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View>
                    <Image style={styles.img} resizeMode="cover" source={Recipe.img} />
                </View>
                <View style={styles.profileImgView}>
                    <Image
                        style={styles.profileImg}
                        source={require('../image/icon/profile.png')}
                    />
                </View>
                <View style={styles.RecipeTextView}>
                    <View>
                        <Text style={styles.TitleText}>{Recipe.title}</Text>
                        <Text style={styles.SubTitleText}>소요시간 : {Recipe.time} 분</Text>
                        <Text style={styles.SubTitleText}>난이도 : {Recipe.difficulty} 단계</Text>
                        <Text style={styles.SubTitleText}>인분 : {Recipe.serving} 인분</Text>
                    </View>
                    <View style={styles.border} />
                    <Text style={styles.SubTitleText}>재료</Text>
                    <Text style={styles.ContentText}>{Recipe.material}</Text>
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
        width: '100%',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
    },
    img: {
        width: '100%',
        height: 300,
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
        marginTop: 6,
        paddingLeft: width * 10,
        paddingRight: width * 10,
        paddingTop: height * 6,
        marginBottom: height * 6,
        width: '100%',
        top: height * 40,
    },
    border: {
        borderTopWidth: height * 2,
        borderColor: 'gray',
        marginTop: height * 6,
        marginBottom: height * 6,
        width: '100%',
    },
    TitleText: {
        fontSize: 34,
        marginTop: height * 4,
        marginBottom: height * 4,
    },
    SubTitleText: {
        fontSize: 22,
        margin: 2,
    },
    ContentText: {
        fontSize: 15,
        paddingLeft: width * 10,
        marginBottom: height * 6,
    },
});

export default RecipeBoardScreen;
