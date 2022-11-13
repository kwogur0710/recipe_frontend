import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    Image,
    ToastAndroid,
} from 'react-native';
import { height, marginWidth, width } from '../../config/globalStyles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TopBar } from '../components/MainComponents/TopBar';

const SettingScreen = ({ route }) => {
    const navigation = useNavigation();
    const user = route.params?.user;
    const showToast = () => {
        Platform.OS === 'android'
            ? ToastAndroid.show('준비중인 기능입니다!', ToastAndroid.SHORT)
            : null;
    };
    const AccountText = ({ text, data }) => {
        return (
            <View style={styles.accountList}>
                <Text style={styles.accountText}>{text}</Text>
                <Text style={styles.accountText}>{data}</Text>
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <TopBar screen="SettingScreen" title="" />
            <View style={styles.profileFrame}>
                <Image
                    source={require('../../image/icon/profile.png')}
                    style={styles.profileImage}
                />
                <View>
                    <Text style={styles.nickNameText}>{user[0].name} 님</Text>
                    <Text style={styles.emailText}>{user[0].email}</Text>
                </View>
            </View>
            <View style={styles.accountBox}>
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: 'PretendardVariable',
                        paddingBottom: height * 10,
                    }}
                >
                    내정보
                </Text>
                <AccountText text="이름" data={user[0].name} />
                <AccountText text="닉네임" data={user[0].nickname} />
                <AccountText text="아이디" data={user[0].id} />
                <AccountText text="이메일" data={user[0].email} />
                <AccountText text="성별" data={user[0].gender} />
                <AccountText text="전화번호" data={user[0].number} />
                <AccountText text="생년월일" data={user[0].birth} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? 40 : 0,
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
    profileFrame: {
        flexDirection: 'row',
        borderColor: 'gray',
        height: height * 100,
        width: width * 360,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    profileImage: {
        width: width * 60,
        height: width * 60,
        borderRadius: 14,
        margin: width * 14,
        marginLeft: width * 20,
    },
    nickNameText: {
        fontSize: 20,
        fontFamily: 'PretendardBold',
    },
    emailText: {
        fontSize: 16,
        fontFamily: 'PretendardVariable',
    },
    accountBox: { 
        width: width * 360, 
        paddingLeft: width * 20, 
        paddingRight: width * 20, 
        paddingTop: height * 10 
    },
    accountList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: width * 10,
        paddingRight:width * 10,
        paddingTop: height * 14,
        paddingBottom: height * 14,
    },
    accountText: {
        fontSize: 20,
        fontFamily: 'PretendardVariable',
    },
});

export default SettingScreen;
