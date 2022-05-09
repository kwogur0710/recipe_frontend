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
            <ScrollView style={{}}>
                <View>
                    <Image
                        style={styles.img}
                        resizeMode="cover"
                        source={Recipe.img}
                    />
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
                        <Text style={styles.SubTitleText}>소요시간 : 30분</Text>
                        <Text style={styles.SubTitleText}>난이도 : ✿✿</Text>
                    </View>
                    <View style={styles.border} />
                    <Text style={styles.SubTitleText}>재료</Text>
                    <Text style={styles.ContentText}>
                        {Recipe.recipeInMaterial}
                    </Text>
                    <View style={styles.border} />
                    <View>
                        <Text style={styles.SubTitleText}>조리 순서</Text>
                        <Text style={styles.ContentText}>
                            {Recipe.recipeDetail}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        alignItems: 'center',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img: {
        width: 390,
        height: 300,
        resizeMode: 'contain',
    },
    profileImgView: {
        width: 390,
        height: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black', //그림자 색상
        shadowOpacity: 0.6, //그림자 투명도
        shadowOffset: { width: 2, height: 4 }, //그림자 위치
    },
    profileImg: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 100,
    },
    RecipeTextView: {
        marginTop: 6,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 6,
        marginBottom: 6,
        width: 350,
        top: 40,
    },
    border: {
        borderTopWidth: 2,
        borderColor: 'gray',
        marginTop: 6,
        marginBottom: 6,
        width: '100%',
    },
    TitleText: {
        fontSize: 34,
        marginTop: 4,
        marginBottom: 4,
    },
    SubTitleText: {
        fontSize: 22,
        margin: 2,
    },
    ContentText: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 4,
    },
});

export default RecipeBoardScreen;
