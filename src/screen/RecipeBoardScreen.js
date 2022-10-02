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
    const [RecipeData, setRecipeData] = useState(route.params?.item);
    console.log(RecipeData);
    useEffect(() => {
        setRecipeData(route.params?.item), [route.params?.item];
        console.log('RecipeBoardScreen', RecipeData.id, RecipeData.title);
    });
    return (
        <SafeAreaView style={styles.container}>
            <TopBar screen="RecipeBoard" title={RecipeData.RCP_NM} />
            <ScrollView style={{ width: '100%' }}>
                <Image
                    style={styles.img}
                    resizeMode="cover"
                    source={{ uri: RecipeData.ATT_FILE_NO_MAIN }}
                />
                <View style={styles.RecipeTextView}>
                    <View style={styles.border} />
                    <Text style={styles.SubTitleText}>재료</Text>
                    <Text style={styles.ContentText}>
                        {RecipeData.RCP_PARTS_DTLS.toString().replace(/\,/gi, '\n')}
                    </Text>
                    <View style={styles.border} />
                    <View>
                        <Text style={styles.SubTitleText}>조리 순서</Text>
                        <Text style={styles.ContentText}>{RecipeData.detail}</Text>
                    </View>
                    <Image
                        style={styles.img}
                        resizeMode="contain"
                        source={{ uri: RecipeData.MANUAL_IMG01 }}
                    />
                    <Text style={styles.text}>{RecipeData.MANUAL01}</Text>
                    <Image
                        style={styles.img}
                        resizeMode="contain"
                        source={{ uri: RecipeData.MANUAL_IMG02 }}
                    />
                    <Text style={styles.text}>{RecipeData.MANUAL02}</Text>
                    <Image
                        style={styles.img}
                        resizeMode="contain"
                        source={{ uri: RecipeData.MANUAL_IMG03 }}
                    />
                    <Text style={styles.text}>{RecipeData.MANUAL03}</Text>
                    <Image
                        style={styles.img}
                        resizeMode="contain"
                        source={{ uri: RecipeData.MANUAL_IMG04 }}
                    />
                    <Text style={styles.text}>{RecipeData.MANUAL04}</Text>
                    <Image
                        style={styles.img}
                        resizeMode="contain"
                        source={{ uri: RecipeData.MANUAL_IMG05 }}
                    />
                    <Text style={styles.text}>{RecipeData.MANUAL05}</Text>
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
    text:{
        fontSize:height*20
    }
});

export default RecipeBoardScreen;
