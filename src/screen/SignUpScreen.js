import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RecipeData } from '../../config/RecipeData';
import { height, marginWidth, width } from '../../config/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Register } from '../components/MainComponents/Register';

const SingUpScreen = ({route}) => {
    const navigation = useNavigation();
    const RecipeData = route.params?.RecipeData;
    const [check, setCheck] = useState([false, false, false]);
    const [checkA, setCheckA] = useState(false);
    const [checkB, setCheckB] = useState(false);
    const [checkC, setCheckC] = useState(false);
    const [inputID, setInputID] = useState();
    const [inputPW, setInputPW] = useState();
    const [inputPW1, setInputPW1] = useState();
    const [inputPW2, setInputPW2] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputName, setInputName] = useState();
    const [inputNicnkname, setInputNicnkname] = useState();
    const getCheckA = (bool) => {setCheckA(bool)};
    const getCheckB = (bool) => {setCheckB(bool)};
    const getCheckC = (bool) => {setCheckC(bool)};
    
    const CheckBox = ({message, bool, getCheck}) => {
        let check = bool;
        return (
            <TouchableOpacity
                style={styles.consent}
                onPress={() => {
                    console.log('click!',bool);
                    getCheck(!check);
                    check = !check;
                }}
            >
                {check == true ? (
                    <Feather name="check-square" size={24} color="black" />
                ) : (
                    <Feather name="square" size={24} color="black" />
                )}
                <Text style={styles.consentText}> {message} </Text>
            </TouchableOpacity>)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{
                    width: width * 280,
                    fontFamily:'PretendardBold',
                    fontSize: height * 30,
                    marginTop: height * 40,
                    marginBottom: height * 10,
                }}
            >
                SignUp
            </Text>
            <TextInput
                placeholder={'아이디'}
                placeholderTextColor={'#959595'}
                containerStyle={styles.textBoxPadding}
                style={styles.textBox}
                onChangeText={(e) => {setInputID(e)}}
            />
            <TextInput
                placeholder={'비밀번호'}
                placeholderTextColor={'#959595'}
                containerStyle={styles.textBoxPadding}
                style={styles.textBox}
                secureTextEntry={true}
                onChangeText={(e) => {setInputPW1(e)}}
            />
            <TextInput
                placeholder={'비밀번호 확인'}
                placeholderTextColor={'#959595'}
                containerStyle={styles.textBoxPadding}
                style={styles.textBox}
                secureTextEntry={true}
                onChangeText={(e) => {setInputPW2(e)}}
            />
            <TextInput
                placeholder={'이메일'}
                placeholderTextColor={'#959595'}
                containerStyle={styles.textBoxPadding}
                style={styles.textBox}
                onChangeText={(e) => {setInputEmail(e)}}
            />
            <TextInput
                placeholder={'이름'}
                placeholderTextColor={'#959595'}
                containerStyle={styles.textBoxPadding}
                style={styles.textBox}
                onChangeText={(e) => {setInputName(e)}}
            />
            <TextInput
                placeholder={'닉네임'}
                placeholderTextColor={'#959595'}
                containerStyle={styles.textBoxPadding}
                style={styles.textBox}
                onChangeText={(e) => {setInputNicnkname(e)}}
            />
            <CheckBox message='이용약관 동의' bool={checkA} getCheck={getCheckA} />
            <CheckBox message='개인정보 수집 이용 동의' bool={checkB} getCheck={getCheckB} />
            <CheckBox message='만 14세 이상입니다' bool={checkC} getCheck={getCheckC} />
            <TouchableOpacity
                style={styles.loginBox}
                onPress={async () => {
                    if(checkA && checkB && checkC && inputPW1 == inputPW2){
                        setInputPW(inputPW1);
                        try{
                            response = await Register(inputID, inputPW, inputEmail, inputName, inputNicnkname);
                            if(response.status == 200) {
                                console.log(response.data.message);
                                //navigation.navigate('MainScreen', { RecipeData: RecipeData });
                            }
                            else if(response.status == 400) console.log(response.data.message);
                        }
                        catch{
                            console.log('err!');
                        }
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
                    회원가입
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        backgroundColor:'#FFFFFF'
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
        borderWidth: 2,
        borderRadius:6,
        marginTop: height * 10,
        paddingLeft: width * 6,
    },
    consent: {
        width: width * 280,
        height: height * 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 10,
    },
    consentText: {
        fontFamily: 'PretendardRegular',
    },
    loginBox: {
        width: width * 280,
        height: height * 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 10,
        backgroundColor: '#000000',
    },
});

export default SingUpScreen;
