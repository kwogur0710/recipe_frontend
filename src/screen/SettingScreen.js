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
import { Feather, Entypo } from '@expo/vector-icons';

const SettingScreen = () => {
    const showToast = () => {
        Platform.OS === 'android'
            ? ToastAndroid.show('준비중인 기능입니다!', ToastAndroid.SHORT)
            : null;
    };
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.profileFrame}>
                    <Image
                        source={require('../../image/icon/profile.png')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileText}> SAU Recipe </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.settingFrame}>
                    <Feather name="heart" size={22} color="black" />
                    <Text style={styles.SettingText}> 좋아요 </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.settingFrame}>
                    <Feather name="help-circle" size={22} color="black" />
                    <Text style={styles.SettingText}> 도움말 </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.settingFrame}>
                    <Image
                        source={require('../../image/icon/megaphone.png')}
                        style={styles.SettingImage}
                    />
                    <Text style={styles.SettingText}> 공지사항 </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.settingFrame}>
                    <Feather name="settings" size={22} color="black" />
                    <Text style={styles.SettingText}> 설정 </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        marginBottom: height * 20, //마진 : 10%
    },
    profileFrame: {
        flexDirection: 'row',
        borderColor: 'gray',
        paddingLeft: width * 14,
        height: height * 70,
        width: width * 360,
        alignItems: 'center',
    },
    settingFrame: {
        flexDirection: 'row',
        borderTopWidth: 0.1,
        borderColor: 'gray',
        paddingLeft: width * 20,
        height: height * 50,
        width: width * 360,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    SettingImage: {
        width: width * 20,
        height: width * 20,
    },
    profileImage: {
        marginRight: width * 10,
        width: width * 60,
        height: width * 60,
        borderRadius: 100,
    },
    profileText: {
        fontSize: 30,
        fontFamily: 'PretendardSemiBold',
    },
    SettingText: {
        marginLeft: width * 10,
        fontSize: height * 14,
        fontFamily: 'PretendardRegular',
    },
});

export default SettingScreen;
