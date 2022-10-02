import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RecipeData } from '../../config/RecipeData';
import { height, marginWidth, width } from '../../config/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const LogInScreen = () => {
    const navigation = useNavigation();
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
                LogIn
            </Text>
            <TextInput
                placeholder={'아이디'}
                placeholderTextColor={'#959595'}
                containerStyle={styles.textBoxPadding}
                style={styles.textBox}
            />
            <TextInput
                placeholder={'비밀번호'}
                placeholderTextColor={'#959595'}
                containerStyle={styles.textBoxPadding}
                style={styles.textBox}
            />
            <TouchableOpacity
                style={styles.loginBox}
                onPress={() => {
                    navigation.navigate('MainScreen');
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
                onPress={() => {
                    navigation.navigate('SignUpScreen');
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
        borderRadius:6,
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
