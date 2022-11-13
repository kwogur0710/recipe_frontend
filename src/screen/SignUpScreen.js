import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RecipeData } from '../../config/RecipeData';
import { height, marginWidth, width } from '../../config/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Register } from '../components/MainComponents/Register';
import {
    checkBirth,
    checkEmail,
    checkID,
    checkName,
    checkNickname,
    checkNumber,
    checkPW,
    checkPW2,
} from '../components/MainComponents/SignUpCheck';

const SingUpScreen = ({ route }) => {
    const navigation = useNavigation();
    const RecipeData = route.params?.RecipeData;
    const [checkA, setCheckA] = useState(false);
    const [checkB, setCheckB] = useState(false);
    const [checkC, setCheckC] = useState(false);
    const [checkM, setCheckM] = useState(true);
    const [checkW, setCheckW] = useState(false);
    const [inputID, setInputID] = useState('');
    const [inputPW, setInputPW] = useState('');
    const [inputPW2, setInputPW2] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputNickname, setInputNickname] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputNumberA, setInputNumberA] = useState('');
    const [inputNumberB, setInputNumberB] = useState('');
    const [inputNumberC, setInputNumberC] = useState('');
    const [InputGender, setInputGender] = useState('남자');
    const [inputBirth, setInputBirth] = useState('');
    const [inputBirthY, setInputBirthY] = useState('');
    const [inputBirthM, setInputBirthM] = useState('');
    const [inputBirthD, setInputBirthD] = useState('');
    useEffect(() => {
        let m,d;
        if(inputBirthM<10) m = '0' + inputBirthM;
        else m = inputBirthM;
        if(inputBirthD<10) d = '0' + inputBirthD;
        else d = inputBirthD;
        
        setInputBirth(inputBirthY +'.'+ m +'.'+ d);
        console.log(inputBirth);
    }, [inputBirthY, inputBirthM, inputBirthD]);

    useEffect(() => {
        setInputNumber(inputNumberA +'-'+ inputNumberB +'-'+ inputNumberC);
        console.log(inputNumber);
    }, [inputNumberA, inputNumberB, inputNumberC]);
    

    const getCheckA = (bool) => {
        setCheckA(bool);
    };
    const getCheckB = (bool) => {
        setCheckB(bool);
    };
    const getCheckC = (bool) => {
        setCheckC(bool);
    };
    const setMan = () => {
        setCheckM(true);
        setCheckW(false);
        setInputGender('남자');
    };
    const setWoman = () => {
        setCheckW(true);
        setCheckM(false);
        setInputGender('여자');
    };
    const CheckBox = ({ message, bool, getCheck }) => {
        let check = bool;
        return (
            <TouchableOpacity
                style={styles.consent}
                onPress={() => {
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
            </TouchableOpacity>
        );
    };
    const GenderCheckBox = ({ message, bool, setCheck }) => {
        return (
            <TouchableOpacity
                style={styles.genderBox}
                onPress={() => {
                    setCheck();
                }}
            >
                {bool == true ? (
                    <Feather name="check-square" size={24} color="black" />
                ) : (
                    <Feather name="square" size={24} color="black" />
                )}
                <Text style={styles.genderText}> {message} </Text>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text
                    style={{
                        width: width * 280,
                        fontFamily: 'PretendardBold',
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
                    containerStyle={styles.PaddingContainer}
                    style={styles.textBox}
                    onChangeText={(e) => {
                        setInputID(e);
                    }}
                />
                {checkID(inputID) ? null : (
                    <Text style={styles.checkText}>6~18자의 영문 소문자, 숫자만 가능합니다.</Text>
                )}
                <TextInput
                    placeholder={'비밀번호'}
                    placeholderTextColor={'#959595'}
                    containerStyle={styles.PaddingContainer}
                    style={styles.textBox}
                    secureTextEntry={true}
                    onChangeText={(e) => {
                        setInputPW(e);
                    }}
                />
                {checkPW(inputPW) ? null : (
                    <Text style={styles.checkText}>
                        숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.
                    </Text>
                )}

                <TextInput
                    placeholder={'비밀번호 확인'}
                    placeholderTextColor={'#959595'}
                    containerStyle={styles.PaddingContainer}
                    style={styles.textBox}
                    secureTextEntry={true}
                    onChangeText={(e) => {
                        setInputPW2(e);
                    }}
                />
                {checkPW2(inputPW, inputPW2) ? null : (
                    <Text style={styles.checkText}>비밀번호와 동일하게 입력해주세요.</Text>
                )}
                <TextInput
                    placeholder={'이메일'}
                    placeholderTextColor={'#959595'}
                    containerStyle={styles.PaddingContainer}
                    style={styles.textBox}
                    onChangeText={(e) => {
                        setInputEmail(e);
                    }}
                />
                {checkEmail(inputEmail) ? null : (
                    <Text style={styles.checkText}>올바른 형식의 이메일을 입력하세요.</Text>
                )}
                <TextInput
                    placeholder={'이름'}
                    placeholderTextColor={'#959595'}
                    containerStyle={styles.PaddingContainer}
                    style={styles.textBox}
                    onChangeText={(e) => {
                        setInputName(e);
                    }}
                />
                {checkName(inputName) ? null : (
                    <Text style={styles.checkText}>올바른 이름을 입력해주세요.</Text>
                )}
                <TextInput
                    placeholder={'닉네임'}
                    placeholderTextColor={'#959595'}
                    containerStyle={styles.PaddingContainer}
                    style={styles.textBox}
                    onChangeText={(e) => {
                        setInputNickname(e);
                    }}
                />
                {checkNickname(inputNickname) ? null : (
                    <Text style={styles.checkText}>2~10자의 닉네임을 입력해주세요.</Text>
                )}
                <View
                    style={{
                        flexDirection: 'row',
                        width: width * 200,
                        justifyContent: 'space-around',
                    }}
                >
                    <GenderCheckBox message="남자" bool={checkM} setCheck={setMan} />
                    <GenderCheckBox message="여자" bool={checkW} setCheck={setWoman} />
                </View>
                <View
                    style={{
                        width: width * 280,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <TextInput
                        placeholder={'01X'}
                        placeholderTextColor={'#959595'}
                        keyboardType="number-pad"
                        maxLength={3}
                        containerStyle={styles.PaddingContainer}
                        style={styles.numberTextBox}
                        onChangeText={(e) => {
                            setInputNumberA(e);
                        }}
                    />
                    <Text style={styles.numberText}>-</Text>
                    <TextInput
                        placeholder={'XXXX'}
                        placeholderTextColor={'#959595'}
                        keyboardType="number-pad"
                        maxLength={4}
                        containerStyle={styles.PaddingContainer}
                        style={styles.numberTextBox}
                        onChangeText={(e) => {
                            setInputNumberB(e);
                        }}
                    />
                    <Text style={styles.numberText}>-</Text>
                    <TextInput
                        placeholder={'XXXX'}
                        placeholderTextColor={'#959595'}
                        keyboardType="number-pad"
                        maxLength={4}
                        containerStyle={styles.PaddingContainer}
                        style={styles.numberTextBox}
                        onChangeText={(e) => {
                            setInputNumberC(e);
                        }}
                    />
                </View>
                {checkNumber(inputNumberA, inputNumberB, inputNumberC) ? null : (
                    <Text style={styles.checkText}>
                        10~11자의 휴대전화 전화번호를 입력해주세요.
                    </Text>
                )}
                <View
                    style={{
                        width: width * 280,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <TextInput
                        placeholder={'연도'}
                        placeholderTextColor={'#959595'}
                        keyboardType="number-pad"
                        maxLength={4}
                        containerStyle={styles.birthContainer}
                        style={styles.birthTextBox}
                        onChangeText={(e) => {
                            setInputBirthY(e);
                        }}
                    />
                    <Text style={styles.birthText}>년</Text>
                    <TextInput
                        placeholder={'월'}
                        placeholderTextColor={'#959595'}
                        keyboardType="number-pad"
                        maxLength={2}
                        containerStyle={styles.birthContainer}
                        style={styles.birthTextBox}
                        onChangeText={(e) => {
                            setInputBirthM(e);
                        }}
                    />
                    <Text style={styles.birthText}>월</Text>
                    <TextInput
                        placeholder={'일'}
                        placeholderTextColor={'#959595'}
                        keyboardType="number-pad"
                        maxLength={2}
                        containerStyle={styles.birthContainer}
                        style={styles.birthTextBox}
                        onChangeText={(e) => {
                            setInputBirthD(e);
                        }}
                    />
                    <Text style={styles.birthText}>일</Text>
                </View>
                {checkBirth(inputBirthY, inputBirthM, inputBirthD) ? null : (
                    <Text style={styles.checkText}>올바른 생년월일을 입력해주세요.</Text>
                )}
                <CheckBox message="이용약관 동의" bool={checkA} getCheck={getCheckA} />
                <CheckBox message="개인정보 수집 이용 동의" bool={checkB} getCheck={getCheckB} />
                <CheckBox message="만 14세 이상입니다" bool={checkC} getCheck={getCheckC} />

                <TouchableOpacity
                    style={styles.loginBox}
                    onPress={async () => {
                        if (!checkID(inputID))
                            Alert.alert(
                                '아이디 오류',
                                '6~18자의 영문 소문자, 숫자로 입력해주세요.'
                            );
                        else if (!checkPW(inputPW))
                            Alert.alert(
                                '비밀번호 오류',
                                '비밀번호를 숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.'
                            );
                        else if (!checkPW2(inputPW, inputPW2))
                            Alert.alert('비밀번호 확인 오류', '비밀번호와 동일하게 입력해주세요.');
                        else if (!checkEmail(inputEmail))
                            Alert.alert('이메일 오류', '올바른 형식의 이메일을 입력하세요.');
                        else if (!checkName(inputName))
                            Alert.alert('이름 오류', '올바른 이름을 입력해주세요.');
                        else if (!checkNickname(inputNickname))
                            Alert.alert('닉네임 오류', '2~10자의 닉네임을 입력해주세요.');
                        else if (!checkBirth(inputBirthY, inputBirthM, inputBirthD))
                            Alert.alert('생년원일 오류', '올바른 생년월일을 입력해주세요.');
                        else if (!checkNumber(inputNumberA, inputNumberB, inputNumberC))
                            Alert.alert(
                                '전화번호 오류',
                                '10~11자의 휴대전화 전화번호를 입력해주세요.'
                            );
                        else if (!checkNickname(inputNickname))
                            Alert.alert('닉네임 오류', '2~10자의 닉네임을 입력해주세요.');
                        else if (!checkA || !checkB || !checkC)
                            Alert.alert('회원가입 실패', '이용약관에 모두 동의해주세요.');
                        else {
                            try {
                                response = await Register(
                                    inputID,
                                    inputPW,
                                    inputEmail,
                                    inputName,
                                    inputNickname,
                                    InputGender,
                                    inputBirth,
                                    inputNumber
                                );
                                if (response.status == 200) {
                                    console.log(response.data.message);
                                    navigation.navigate('LogInScreen');
                                } else if (response.status == 400) {
                                    Alert.alert('회원가입 실패', response.data.message);
                                    console.log(response.data.message);
                                }
                            } catch {
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
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    PaddingContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    birthContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    textBox: {
        fontSize: 15,
        fontFamily: 'PretendardRegular',
        borderWidth: 2,
        borderRadius: 6,
        width: width * 280,
        height: height * 40,
        marginTop: height * 10,
        paddingLeft: width * 6,
    },
    numberTextBox: {
        fontSize: 15,
        fontFamily: 'PretendardRegular',
        borderWidth: 2,
        borderRadius: 6,
        width: width * 78,
        height: height * 40,
        marginTop: height * 10,
        paddingLeft: width * 6,
    },
    numberText: {
        fontSize: height * 22,
        marginTop: height * 6,
    },
    birthTextBox: {
        fontSize: 15,
        fontFamily: 'PretendardRegular',
        borderWidth: 2,
        borderRadius: 6,
        width: width * 70,
        height: height * 40,
        marginTop: height * 10,
        paddingLeft: width * 6,
    },
    birthText: {
        fontSize: height * 12,
        marginTop: height * 12,
    },
    consent: {
        width: width * 280,
        height: height * 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 10,
    },
    consentText: {
        fontFamily: 'PretendardRegular',
    },
    genderBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 10,
    },
    genderText: {
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
    checkText: {
        width: width * 280,
        paddingTop: height * 2,
        paddingLeft: width * 4,
        color: '#555555',
        fontSize: height * 10,
        fontFamily: 'PretendardRegular',
    },
});

export default SingUpScreen;
