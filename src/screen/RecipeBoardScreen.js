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
import axios from 'axios';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const RecipeBoardScreen = ({ route, navigation }) => {
    console.log('RecipeData',route.params?.item);
    const [RecipeData, setRecipeData] = useState(route.params?.item);
    const user = route.params?.user[0];
    const [comments, setComments] = useState();
    const [loading, setLoading] = useState();
    const [inputComments, setInputComments] = useState();

    // 첫 렌더링 때 fetchNews() 한 번 실행
    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        try {
            const response = await axios.get(
                `https://recipe.loca.lt/post/get/postnum=${RecipeData.RCP_SEQ}`
            );
            setComments(response.data);
        } catch (e) {
            console.log('ERROR!', e);
        }
        setLoading(true);
    };



    const TextImage = (props) => {
        if (props.img != '')
            return (
                <View>
                    <Image style={styles.img} resizeMode="contain" source={{ uri: props.img }} />
                    <Text style={styles.text}>{props.text}</Text>
                </View>
            );
        else {
            return <View />;
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <TopBar screen="RecipeBoard" title={RecipeData.RCP_NM} />
            <ScrollView style={{ width: '100%' }}>
                <Image
                    style={styles.titleImg}
                    resizeMode="cover"
                    source={{ uri: RecipeData.ATT_FILE_NO_MAIN }}
                />
                <View style={styles.RecipeTextView}>
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.navigate('CommentScreen',
                        {postNum:RecipeData.RCP_SEQ, user:user })
                    }}>
                        <Text>댓글보기</Text>
                    </TouchableOpacity>
                    <View style={styles.border} />
                    <Text> 열량 : {RecipeData.INFO_ENG}</Text>
                    <Text> 탄수화물 : {RecipeData.INFO_CAR}</Text>
                    <Text> 단백질 : {RecipeData.INFO_PRO}</Text>
                    <Text> 지방 : {RecipeData.INFO_FAT}</Text>
                    <Text> 나트륨 : {RecipeData.INFO_NA}</Text>
                    <View style={styles.border} />

                    <Text style={styles.SubTitleText}>재료</Text>
                    <Text style={styles.ContentText}>
                        {RecipeData.RCP_PARTS_DTLS.toString().replace(/\,/gi, '\n')}
                    </Text>
                    <View style={styles.border} />
                    <Text style={styles.SubTitleText}>조리 순서</Text>

                    <TextImage img={RecipeData.MANUAL_IMG01} text={RecipeData.MANUAL01} />
                    <TextImage img={RecipeData.MANUAL_IMG02} text={RecipeData.MANUAL02} />
                    <TextImage img={RecipeData.MANUAL_IMG03} text={RecipeData.MANUAL03} />
                    <TextImage img={RecipeData.MANUAL_IMG04} text={RecipeData.MANUAL04} />
                    <TextImage img={RecipeData.MANUAL_IMG05} text={RecipeData.MANUAL05} />
                    <TextImage img={RecipeData.MANUAL_IMG06} text={RecipeData.MANUAL06} />
                    <TextImage img={RecipeData.MANUAL_IMG07} text={RecipeData.MANUAL07} />
                    <TextImage img={RecipeData.MANUAL_IMG08} text={RecipeData.MANUAL08} />
                    <TextImage img={RecipeData.MANUAL_IMG09} text={RecipeData.MANUAL09} />
                    <TextImage img={RecipeData.MANUAL_IMG10} text={RecipeData.MANUAL10} />
                    <TextImage img={RecipeData.MANUAL_IMG11} text={RecipeData.MANUAL11} />
                    <TextImage img={RecipeData.MANUAL_IMG12} text={RecipeData.MANUAL12} />
                    <TextImage img={RecipeData.MANUAL_IMG13} text={RecipeData.MANUAL13} />
                    <TextImage img={RecipeData.MANUAL_IMG14} text={RecipeData.MANUAL14} />
                    <TextImage img={RecipeData.MANUAL_IMG15} text={RecipeData.MANUAL15} />
                    <TextImage img={RecipeData.MANUAL_IMG16} text={RecipeData.MANUAL16} />
                    <TextImage img={RecipeData.MANUAL_IMG17} text={RecipeData.MANUAL17} />
                    <TextImage img={RecipeData.MANUAL_IMG18} text={RecipeData.MANUAL18} />
                    <TextImage img={RecipeData.MANUAL_IMG19} text={RecipeData.MANUAL19} />
                    <TextImage img={RecipeData.MANUAL_IMG20} text={RecipeData.MANUAL20} />
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
    titleImg: {
        width: '100%',
        height: height * 330,
    },
    img: {
        width: '100%',
        height: height * 220,
        marginBottom: height * 10,
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
    text: {
        fontSize: height * 14,
        marginBottom: height * 10,
    },
});

export default RecipeBoardScreen;
