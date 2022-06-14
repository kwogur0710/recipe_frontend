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

const RecipeBoardScreen = ({ route }) => {
    const navigation = useNavigation();
    const [Recipe, setRecipe] = useState(route.params?.item);
    useEffect(() => {
        setRecipe(route.params?.item), [route.params?.item];
        console.log(Recipe);
    });

    console.log(Recipe);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.TopBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.TopBtn}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Feather name="chevron-left" size={26} color="black" />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: height * 20,
                            fontFamily: 'PretendardBold',
                            color: '#222222',
                            marginLeft: width * 4,
                        }}
                    >
                        레시피 글쓰기
                    </Text>
                    <View style={styles.TopBtn} />
                </View>
                <View style={styles.TopBtn} />
            </View>
            <ScrollView style={{ width: '100%' }}>
                <View>
                    <Image style={styles.img} resizeMode="cover" source={Recipe.img} />
                </View>
                <View style={styles.profileImgView}>
                    <Image
                        style={styles.profileImg}
                        source={require('../../image/icon/profile.png')}
                    />
                </View>
                <View style={styles.RecipeTextView}>
                    <Text style={styles.TitleText}>{Recipe.title}</Text>
                    <Text style={styles.SubText}>시간 : {Recipe.time} 분</Text>
                    <Text style={styles.SubText}>난이도 : {Recipe.difficulty} 단계</Text>
                    <Text style={styles.SubText}>인분 : {Recipe.serving} 인분</Text>
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
        marginLeft: width * 20,
        marginRight: width * 20,
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
