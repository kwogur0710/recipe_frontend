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
import { useNavigation } from '@react-navigation/native';
import { TopBar } from '../components/MainComponents/TopBar';

const SettingScreen = () => {
    const navigation = useNavigation();
    const showToast = () => {
        Platform.OS === 'android'
            ? ToastAndroid.show('준비중인 기능입니다!', ToastAndroid.SHORT)
            : null;
    };
    return (
        <SafeAreaView style={styles.container}>
            <TopBar screen="SettingScreen" title="" />

            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.profileFrame}>
                    <Image
                        source={require('../../image/icon/profile.png')}
                        style={styles.profileImage}
                    />
                </View>
            </TouchableOpacity>

            <View style={styles.profileNameFrame}>
                <Text style={styles.profileText}> SAU RECIPE </Text>
            </View>

            <View style={styles.margineFrame}></View>

            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.settingFrame}>
                    <Text style={styles.SettingText}> 좋아요 </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.margineFrame}></View>

            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.settingFrame}>
                    <Text style={styles.SettingText}> 도움말 </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.margineFrame}></View>

            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.settingFrame}>
                    <Text style={styles.SettingText}> 공지사항 </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.margineFrame}></View>

            <TouchableOpacity onPress={() => showToast()}>
                <View style={styles.settingFrame}>
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
        backgroundColor:'#FFFFFF'
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
        alignItems: 'center',
        justifyContent: 'center', //세로정렬
    },
    settingFrame: {
        flexDirection: 'row',
        borderColor: '#0050FF',
        height: height * 50,
        width: width * 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    margineFrame: {
        flexDirection: 'row',
        borderTopWidth: 0.1,
        borderColor: 'gray',
        height: 18,
        width: width * 200,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 6,
    },
    profileNameFrame: {
        flexDirection: 'row',
        borderColor: 'gray',
        height: height * 70,
        width: width * 360,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SettingImage: {
        width: width * 20,
        height: width * 20,
    },
    profileImage: {
        width: width * 80,
        height: width * 80,
        borderRadius: 100,
    },
    profileText: {
        fontSize: 25,
        fontFamily: 'PretendardSemiBold',
    },
    SettingText: {
        fontSize: 18,
        fontFamily: 'PretendardRegular',
    },
});

export default SettingScreen;
