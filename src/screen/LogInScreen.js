import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { height, marginWidth, width } from '../../config/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { RequestLogin } from '../components/MainComponents/RequestLogin';

const LogInScreen = () => {
    const navigation = useNavigation();
    const [inputID, setInputID] = useState();
    const [inputPW, setInputPW] = useState();
    const [RecipeData, setRecipeData] = useState('');
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadingRecipe = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setRecipeData(null);

            // loading 상태를 true 로 바꿉니다.
            setLoading(true);

            const response = await axios.get(
                'https://openapi.foodsafetykorea.go.kr/api/b7b0efafdbdc41c79730/COOKRCP01/json/1/100'
            );

            // 데이터는 response.data.data 안에 들어있다.
            setRecipeData(response.data.COOKRCP01.row);
        } catch (e) {
            setError(e);
        }
        // loading 끄기
        setLoading(false);
    };

    // 첫 렌더링 때 fetchNews() 한 번 실행
    useEffect(() => {
        loadingRecipe();
    }, []);

    if (RecipeData != null) {
        return (
            <SafeAreaView style={styles.container}>
                <Text
                    style={{
                        width: width * 280,
                        fontFamily: 'PretendardBold',
                        fontSize: height * 30,
                        marginTop: height * 40,
                        marginBottom: height * 10,
                    }}
                >
                    LogIn
                </Text>
                <TextInput
                    placeholder={'아이디'}
                    placeholderTextColor={'#959595'}
                    containerStyle={styles.textBoxPadding}
                    style={styles.textBox}
                    onChangeText={(e) => {
                        setInputID(e);
                    }}
                />
                <TextInput
                    placeholder={'비밀번호'}
                    placeholderTextColor={'#959595'}
                    containerStyle={styles.textBoxPadding}
                    style={styles.textBox}
                    secureTextEntry={true}
                    onChangeText={(e) => {
                        setInputPW(e);
                    }}
                />
                <TouchableOpacity
                    style={styles.loginBox}
                    onPress={async () => {
                        try {
                            response = await RequestLogin(inputID, inputPW);
                            if (response.status == 200) {
                                navigation.navigate('MainScreen', { RecipeData: RecipeData, user : response.data.user });
                            }else if (response.status == 400) Alert.alert(response.data.message);
                            else if(response.status == 404 || response.status == 504) Alert.alert('네트워크 통신오류입니다.');
                        } catch {
                            console.log('err : ', response);
                        }
                    }}
                >
                    <Text
                        style={{
                            color: '#FFFFFF',
                            fontFamily: 'PretendardSemiBold',
                            fontSize: height * 12,
                        }}
                    >
                        로그인
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.signUpBox}
                    onPress={() => navigation.navigate('SignUpScreen', { RecipeData: RecipeData })}
                >
                    <Text
                        style={{
                            color: '#FFFFFF',
                            fontFamily: 'PretendardSemiBold',
                            fontSize: height * 12,
                        }}
                    >
                        회원가입
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        backgroundColor: '#FFFFFF',
    },
    textBoxPadding: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    textBox: {
        fontSize: 15,
        fontFamily: 'PretendardRegular',
        width: width * 280,
        height: height * 40,
        borderRadius: 6,
        borderWidth: 2,
        marginTop: height * 10,
        paddingLeft: width * 6,
    },
    loginBox: {
        width: width * 280,
        height: height * 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 10,
        backgroundColor: '#2C2C34',
    },
    signUpBox: {
        width: width * 280,
        height: height * 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 10,
        backgroundColor: '#3182F7',
    },
});

export default LogInScreen;
